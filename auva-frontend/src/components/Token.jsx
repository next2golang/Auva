import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function Token({address="xxxxxxxx"}) {
    const token = address;
    const [copied, setCopied] = useState(false);
    const copyHandle = () => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div className="token rounded border border-black position-relative z-1">
            <p>CA: {token}</p>
            <button onClick={() => copyHandle()} className="bg-transparent p-0 border-0">
                {copied ? <LuCopyCheck /> : <LuCopy />}
            </button>
        </div>
    )
}
