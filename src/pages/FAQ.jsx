import { memo } from 'react'

const FAQ = memo(function FAQ() {
  return (
    <div className="faq">
      <h1 className="y2k-title">✨ Frequently Asked Questions ✨</h1>
      <div className="faq-container y2k-container">
        {/* FAQ content will go here */}
      </div>
    </div>
  )
})

export default FAQ