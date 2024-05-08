import Button from './Button'

export default function ProjectsList({projects}){
    return (
        <section className='flex-none w-40 m-4'>
            <h2 className='font-semibold uppercase text-xl'>Your Projects</h2>
            <Button text='+ Add Project' className='px-4 py-2 rounded bg-gray-500 text-gray-300 my-4' />
            <ul>
                {projects.map(project => {
                    return <li key={project.title}><button>{project.title}</button></li>
                })}
            </ul>
        </section>
    )
}