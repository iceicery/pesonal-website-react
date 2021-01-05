import project1 from '../../images/LearningHowToLearn.JPG';
import project2 from '../../images/FromPortlandToPortland.JPG';
import project3 from '../../images/AroundUs.JPG';
import project4 from '../../images/baseCalculator.JPG';
import newsProject from '../../images/newsExplorer.JPG';
import personalWP from '../../images/PersonalWebSite.JPG';

export const Link = {
    news: {
        demo: 'https://embed.storyxpress.co/embed/kj31jyw7cpsekf5a4',
        website: 'https://newsfinder.students.nomoreparties.site',
        code: {
            font: 'https://github.com/iceicery/news-explorer-frontend',
            end: 'https://github.com/iceicery/news-explorer-api',
        }
    },
    around: {
        demo: 'https://embed.storyxpress.co/embed/kj95tq0f7o6qb46ns',
        website: 'https://iceicery.github.io/web_project_4/dist/index.html',
        code: {
            font: "https://github.com/iceicery/react-around-auth",
            end: "https://github.com/iceicery/react-around-api-full",
        }
    },
    learning: {
        demo: 'https://embed.storyxpress.co/embed/kj3el123oabr2qwxh',
        website: 'https://iceicery.github.io/web_project_1/',
        code: 'https://github.com/iceicery/web_project_1'
    },
    bicycle: {
        demo: 'https://embed.storyxpress.co/embed/kj949ce472p1dx41e',
        website: 'https://iceicery.github.io/web_project_3/',
        code: 'https://github.com/iceicery/web_project_3'
    },
    calculators: {
        demo: 'https://embed.storyxpress.co/embed/kj94l1vir0iwv2myx',
        website: 'https://iceicery.github.io/BaseCaculator/',
        code: 'https://github.com/iceicery/BaseCaculator'
    },
    personal: {
        website: 'https://iceicery.github.io/pesonal-website-react',
        code: 'https://github.com/iceicery/pesonal-website-react'
    }
}

export const projects = [
    {
        image: newsProject,
        text: "News Explorer is a website users could search news by keyword and save them while signing in.",
        tech: ["CSS", "JavaScript", "React", "Azure", "Full Stack"],
        link: Link.news.code.website,
        codes: [{
            button: "Font Code",
            link: Link.news.code.font
        }, {
            button: "API Code",
            link: Link.news.code.end
        }]
    },
    {
        image: project3,
        text: "Around the US is a website users could log in, costumize their profiles, share their photos and like others'.",
        tech: ["CSS", "JavaScript", "React", "Azure", "Full Stack"],
        link: Link.around.website,
        codes: [{
            button: "Font Code",
            link: Link.around.code.font
        }, {
            button: "API Code",
            link: Link.around.code.end
        }]
    },
    {
        image: personalWP,
        text: "This is my personal website with the info of my web project profolios, work experiences, and learning tracks.",
        tech: ["React", "CSS", "JavaScript"],
        link: Link.personal.website,
        codes: [{
            button: "Code",
            link: Link.personal.code
        }]
    },
    {
        image: project1,
        text: "A website with info of learning how to learn. This is my very first independent web project from Praticum.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: Link.learning.website,
        codes: [{
            button: "Code",
            link: Link.learning.code

        }]
    },
    {
        image: project2,
        text: "A website with information of a bicycle journey across the USA. This is my second independent project from Practicum.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: Link.bicycle.website,
        codes: [{
            button: "Code",
            link: Link.bicycle.code
        }]
    },
    {
        image: project4,
        text: "A website with different bases calculators including binary, octal and more.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: Link.calculators.website,
        codes: [{
            button: "Code",
            Link: Link.calculators.code
        }]
    }
]