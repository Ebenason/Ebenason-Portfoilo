import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheck, FaSpinner } from 'react-icons/fa'
import { contactSchema, GOOGLE_SHEETS_ENDPOINT } from '../constants/contactSchema'
import { glassEffect } from '../styles/Uistyles'

const ContactForm = () => {
  const [status, setStatus] = useState('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data) => {
    setStatus('loading')
    try {
      if (GOOGLE_SHEETS_ENDPOINT) {
        await fetch(GOOGLE_SHEETS_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          body: new URLSearchParams(data),
        })
      }
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full bg-gray-900/60 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/40 focus:border-yellow-400/60 transition-all'
  const errorClass = 'text-red-400 text-xs mt-1'

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${glassEffect} flex flex-col items-center justify-center gap-4 p-12 text-center`}
        role="status"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
          <FaCheck className="text-3xl text-green-400" aria-hidden="true" />
        </div>
        <h3 className="text-white text-xl font-semibold">Message Sent!</h3>
        <p className="text-gray-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 px-6 py-2 text-sm text-yellow-400 border border-yellow-400/30 rounded-xl hover:bg-yellow-400/10 transition-colors focus-visible:outline-2 focus-visible:outline-yellow-400/60"
        >
          Send Another
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${glassEffect} flex flex-col gap-5`} noValidate>
      <h2 className="text-xl font-semibold text-white">Get In Touch</h2>

      <div>
        <label htmlFor="fullName" className="sr-only">Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Full Name"
          {...register('fullName')}
          className={fieldClass}
          aria-invalid={errors.fullName ? 'true' : 'false'}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className={errorClass} role="alert">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          {...register('email')}
          className={fieldClass}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className={errorClass} role="alert">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="sr-only">Subject</label>
        <input
          id="subject"
          type="text"
          placeholder="Subject"
          {...register('subject')}
          className={fieldClass}
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className={errorClass} role="alert">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Your Message"
          {...register('message')}
          className={`${fieldClass} resize-none`}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className={errorClass} role="alert">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all focus-visible:outline-2 focus-visible:outline-yellow-400/60"
      >
        {status === 'loading' ? (
          <>
            <FaSpinner className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane aria-hidden="true" />
            Send Message
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-xs text-center" role="alert">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  )
}

export default ContactForm
