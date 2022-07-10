import React from 'react';
import {ReactComponent as HTMLIcon} from '../assets/skillsIcons/htmlIcon.svg'
import {ReactComponent as CSSIcon} from '../assets/skillsIcons/cssIcon.svg'
import {ReactComponent as JSIcon} from '../assets/skillsIcons/jsIcon.svg'
import {ReactComponent as ReactIcon} from '../assets/skillsIcons/reactIcon.svg'
import {ReactComponent as TSIcon} from '../assets/skillsIcons/tsIcon.svg'
import {ReactComponent as NodeIcon} from '../assets/skillsIcons/nodeIcon.svg'
 import {ReactComponent as GraphQLIcon} from '../assets/skillsIcons/graphqlIcon.svg'
 import {ReactComponent as MongoIcon} from '../assets/skillsIcons/mongoIcon.svg'
 import {ReactComponent as TailwindIcon} from '../assets/skillsIcons/tailwindIcon.svg'
 import {ReactComponent as NextIcon} from '../assets/skillsIcons/nextjsIcon.svg'
import {ReactComponent as VSCodeIcon} from '../assets/skillsIcons/vscodeIcon.svg'
 import {ReactComponent as GithubIcon} from '../assets/skillsIcons/githubIcon.svg'
 import {ReactComponent as VercelIcon} from '../assets/skillsIcons/vercelIcon.svg'

const components = {
    html: HTMLIcon,
    css: CSSIcon,
    javascript: JSIcon,
    react: ReactIcon,
    typescript: TSIcon,
    node: NodeIcon,
    graphql: GraphQLIcon,
    mongo: MongoIcon,
    tailwind: TailwindIcon,
    nextjs: NextIcon,
    vscode: VSCodeIcon,
    github: GithubIcon,
    vercel: VercelIcon
}

const WebSkillsItem = ({skillIcon}) => {
    const SkillItem = components[skillIcon]
    return (
        <div className=' shadow-calm-green shadow-md  rounded-lg p-6 fill-white hover:fill-calm-green '>
            <SkillItem/>
            <h2 className=' uppercase text-sm text-white text-center font-bold mt-1'>{skillIcon}</h2>
        </div>
    );
};

export default WebSkillsItem;