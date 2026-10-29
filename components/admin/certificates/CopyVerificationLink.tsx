'use client'

import { useState } from 'react'
import { Check, Copy } from 'tabler-icons-react'

export function CopyVerificationLink({ url }: { url: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-line bg-white px-2.5 text-[11px] font-semibold text-ink-soft transition-colors hover:border-ink/30 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      aria-live="polite"
    >
      {copied ? (
        <>
          <Check size={13} className="text-emerald-600" />
          Copied
        </>
      ) : (
        <>
          <Copy size={13} />
          Copy link
        </>
      )}
    </button>
  )
}
