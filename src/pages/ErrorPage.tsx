import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    const error = useRouteError() as { status?: number } | undefined

    let title = 'Error'
    let message = 'Sorry, an unexpected error has occurred.'

    /* eslint-disable @typescript-eslint/no-magic-numbers*/
    if (error?.status === 404) {
        title = 'Page Not Found'
        message = 'The page you are looking for does not exist.'
    } else if (error?.status === 401) {
        title = 'Unauthorized'
        message = 'You are not authorized to access this page.'
    } else if (error?.status === 503) {
        title = 'Service Unavailable'
        message = 'The service is currently unavailable. Please try again later.'
    }

    return (
        <div className='absolute top-1/2 left-1/2 w-full -translate-1/2'>
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-6xl font-bold text-neutral-900'>{title}</h1>
                <p className='mt-2 text-xl text-neutral-600'>{message}</p>
                <div className='mt-6 flex items-center gap-4'>
                    <Link
                        to='/'
                        className='cursor-pointer rounded-lg bg-neutral-800 px-4 py-2 font-medium
                            text-neutral-100 transition-colors hover:bg-neutral-900 active:scale-[.98]'
                    >
                        Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className='cursor-pointer rounded-lg bg-neutral-200 px-4 py-2 font-medium
                            text-neutral-900 transition-colors hover:bg-neutral-300 active:scale-[.98]'
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ErrorPage
