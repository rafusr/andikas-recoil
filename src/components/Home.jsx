import { useEffect, useState } from 'react'
import skillService from '../services/skill.services'

const Hero = () => {
    const resumeUrl = process.env.REACT_APP_RESUME_URL

    return (
        <div className="hero min-h-fit">
            <div className="hero-content flex-col lg:flex-row p-9">
                <img src="https://avatars.githubusercontent.com/u/42686908?v=4" className="max-h-60 lg:max-h-80 max-w-60 lg:max-w-80 rounded-full border-4 border-secondary self-start lg:my-8 xl:my-8 lg:mx-8" />
                <div className="my-6 lg:mx-9">
                    <h1 className="text-2xl lg:text-3xl xl:text-3xl font-semibold text-secondary poppins">ANDIKA SULTANRAFLI</h1>
                    <p className="text-xl lg:text-xl xl:text-xl font-semibold pt-1">Software Engineer</p>
                    <p className="text-md py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <a className="btn btn-sm px-4 btn-outline btn-secondary rounded-none" href={resumeUrl} target="_blank">
                        Resume
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ml-2 h-4 w-4 fill-secondary"><path fill="none" d="M0 0h24v24H0z" /><path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" /></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

const SkillItem = ({ skill }) => {
    return (
        <div className="flex flex-col mt-12">
            <img src={process.env.PUBLIC_URL + `/assets/icons/${skill.image}`} alt={skill.title} className="max-h-8 w-8 self-center" />
            <p className="font-semibold mt-4">{skill.title}</p>
        </div>
    )
}

const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        skillService.getSkills().then(response => {
            setSkills(response.data)
        })
    }, [])

    return (
        <div className="px-9 mt-4">
            <div className="flex flex-row">
                <h3 className="text-md text-secondary font-bold">SKILLS</h3>
                <div className="ml-2 lg:ml-6 w-32 h-px bg-secondary self-center"></div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
                {skills.map(skill =>
                    <SkillItem skill={skill} key={skill.title} />
                )}
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className="py-16">
            <Hero />
            <Skills />
        </div>
    )
}

export default Home