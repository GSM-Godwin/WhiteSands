"use client"

import { useCallback, useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"
import { useSearchParams } from "next/navigation"

import { newVerification } from "@/actions/new-verification"
import { CardWrapper } from "./card-wrapper"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"

export const NewVerficationForm = () => {
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()

    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const onSubmit = () => {
        if(success || error) return;

        if (!token) {
            setError("Missing Token!");
            return
        };

        newVerification(token)
        .then((data) => {
            setSuccess(data.success)
            setError(data.error)
        })
        .catch(() => {
            setError("Something went wrong!")
        })
    }

    useEffect(() => {
        onSubmit();
    }, [onSubmit])

    return (
        <CardWrapper
            headerLabel="Confirming your verification"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && (
                    <SyncLoader />
                )}
                <FormSuccess message={success} />
                {!success && (
                    <FormError message={error} />
                )}
            </div>
        </CardWrapper>
    )
}