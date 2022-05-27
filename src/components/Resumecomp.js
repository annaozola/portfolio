import React from 'react'
import '../styles/global.scss'
import '../styles/resume.scss'

export default function Resumecomp() {
  return (
    <section className="resume">
        <div className="grid">
            <div className="header">
                <h1>Anna Ozola</h1>
            </div>
        </div>
        <div className="grid info">
            <div className="info__contacts">
                <p>hello@annaozola.com <br />+37128635159 <br />Currently located in <br /><span>Riga, Latvia</span>.</p>
            </div>
            <div className="info__socials__one">
                <ul>
                    <li>LinkedIn: @annacgfx</li>
                    <li>Behance: @annacgfx</li>
                    <li>Dribbble: @annacgfx</li>
                    <li>GitHub: @annaozola</li>
                </ul>
            </div>
            <div className="info__socials__two">
                <ul>
                    <li>Artstation: @annaozola</li>
                    <li>Instagram @annacgfx</li>
                    <li>Vimeo: @annaozola</li>
                </ul>
            </div>
        </div>
        <div className="grid skills">
            <div className="skills__header">
                <h1>Skills</h1>
            </div>
            <div className="skills__prglng__one"><h6>Prg. Languages, Libraries and Platforms</h6></div>
            <div className="skills__prglng__two"><p>HTML, CSS, JavaScript, SCSS, React, GatsbyJS, WordPress</p></div>
            <div className="skills__lang__one"><h6>Languages</h6></div>
            <div className="skills__lang__two"><p>Latvian, English, Russian (beginner)</p></div>
            <div className="skills__apps__headings__one"><h6>Applications</h6></div>
            <div className="skills__apps__headings__two"><h6>3D Media</h6></div>
            <div className="skills__apps__headings__three"><h6>Design</h6></div>
            <div className="skills__apps__headings__four"><h6>Video Media</h6></div>
            <div className="skills__apps__content__one">
                <ul>
                    <li>Blender</li>
                    <li>Houdini</li>
                    <li>Substance 3D Painter</li>
                    <li>Substance 3D Designer</li>
                    <li>Substance 3D Sampler</li>
                    <li>SpeedTree</li>
                    <li>Unity</li>
                </ul>
            </div>
            <div className="skills__apps__content__two">
                <ul>
                    <li>Figma</li>
                    <li>Adobe Xd</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>InDesign</li>
                    <li>Lightroom</li>
                </ul>
            </div>
            <div className="skills__apps__content__three">
                <ul>
                    <li>DaVinci Resolve</li>
                    <li>Premiere</li>
                    <li>After Effects</li>
                </ul>
            </div>
        </div>
        <div className="grid experience">
            <div className="experience__header">
                <h1>Experience</h1>
            </div>
            <div className="experience__one"><p><span>BSMS</span> - Student Intern <br />Sept 2020 - Oct 2020</p></div>
            <div className="experience__two"><p>Drew a storyboard and ideas for a video advertisement, as well as helped film the video. Designed an e-mail blast message. Developed a prototype for a website improvement idea I had in mind. Planned a corporate event. Created presentations.</p></div>
            <div className="experience__one"><p><span>PickleHosting</span> - Technician <br />May 2015 - Sep 2015</p></div>
            <div className="experience__two"><p>Fixed issues related to Minecraft servers, domains and hosting. Replied to clients tickets.</p></div>
        </div>
        <div className="grid education">
            <div className="education__header">
                <h1>Education</h1>
            </div>
            <div className="education__one"><p><span>Riga Art and Media School</span> <br />Multimedia Design Specialist <br />Web Designer <br />Sep 2017 - Jul 2021</p></div>
            <div className="education__two"><p>Received certification <span>Multimedia Design Specialist</span> from International Education Society (IES). For my final project, I designed and developed a website for an architecture firm "Kroks" and got a perfect mark of 10/10.</p></div>
        </div>
    </section>
  )
}