import React from 'react'
export default function ContactForm() {
    const [error, setError] = React.useState<boolean>(false)
    const [success, setSuccess] = React.useState<boolean>(false)
    const [loading, setLoading] = React.useState<boolean>(false)
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        const data = {
            email: e.target.email.value,
            message: e.target.message.value,
        }
        const res = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const result = await res.json()
        console.log(res.status, result)
        if (res.status === 200) {
            setSuccess(true)
            setLoading(false)
            e.target.reset()
        } else {
            setError(true)
            setLoading(false)
        }
    }

    const handleChange= () =>{
        setError(false);
        setSuccess(false);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-control p-4'>
                <h4 className='text-center'>Contact me</h4>
                <label className='label'>
                    <span className='label-text'>Your Email</span>
                </label>
                <label className='input-group'>
                    <span>Email</span>
                    <input
                        type='email'
                        placeholder='your@email.com'
                        className='input input-bordered w-full'
                        name='email'
                        required
                        onChange={handleChange}
                    />
                </label>
                <label className='label'>
                    <span className='label-text'>Message</span>
                </label>
                <textarea
                    placeholder='Your message...'
                    className='textarea textarea-bordered textarea-md w-full'
                    name='message'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className='mt-5 btn btn-accent'>
                    Send
                </button>

                {success && (
                    <div className='mt-5 alert alert-success shadow-lg'>
                        <div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='stroke-current flex-shrink-0 h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                            </svg>
                            <span>Your message has been sent!</span>
                        </div>
                    </div>
                )}
                {error && <div className='alert alert-error shadow-lg'>
                    <div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='stroke-current flex-shrink-0 h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                        </svg>
                        <span>Something went wrong !</span>
                    </div>
                </div>}
            </div>
        </form>
    )
}
