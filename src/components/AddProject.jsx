import Button from './Button'

export default function AddProject(){
    return (
        <section className='flex-initial w-full m-4'>
            <div className='flex justify-end'>
                <Button text='Cancel' className='px-4 py-2 rounded text-black' />
                <Button text='Save' className='px-4 py-2 rounded bg-gray-950 text-white' />
            </div>
            <div className='my-4'>
                <h3 className='font-semibold uppercase text-sm mb-1'>Title</h3>
                <input type='text' className='w-full'/>
            </div>
            <div className='my-4'>
                <h3 className='font-semibold uppercase text-sm mb-1'>Description</h3>
                <textarea className='w-full' />
            </div>
            <div className='my-4'> 
                <h3 className='font-semibold uppercase text-sm mb-1'>Due Date</h3>
                <input type='date' className='w-full'/>
            </div>
        </section>
    )
}