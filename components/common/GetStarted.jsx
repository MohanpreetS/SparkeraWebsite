import React from 'react'
import Link from "next/link";

export default function GetStarted() {
    return (
        <div className="col-auto">
            <Link
                href="/contact"
                className="button -md -dark-1 -rounded text-white"
            >
                Get Started
            </Link>
        </div>
    )
}