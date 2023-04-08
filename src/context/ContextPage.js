import React, { useState, createContext } from "react";
import GithubImageDark from '@assets/icons/github-dark.png'
import LinkedinImageDark from '@assets/icons/linkedin-dark.png'
import TwitterImageDark from '@assets/icons/twitter-dark.png'
import InstagramImageDark from '@assets/icons/instagram-dark.png'
import YoutubeImageDark from '@assets/icons/youtube-dark.png'

import GithubImageLight from '@assets/icons/github.png'
import LinkedinImageLight from '@assets/icons/linkedin.png'
import TwitterImageLight from '@assets/icons/twitter.png'
import InstagramImageLight from '@assets/icons/instagram.png'
import YoutubeImageLight from '@assets/icons/youtube.png'

export const PageContext = createContext();

const ContextPage = ({ children }) => {
    const [urlRepo , setUrlRepo] = useState("https://api.github.com/search/repositories?q=topic:portfolio+user:anthonypernia&sort=updated&order=desc");
    const [ socialMedia, setSocialMedia ] = useState([
        {
            iconLight: GithubImageLight,
            iconDark: GithubImageDark,
            url: 'https://github.com/anthonypernia'
        },
        {
            iconDark: LinkedinImageDark,
            iconLight: LinkedinImageLight,
            url: 'https://www.linkedin.com/in/anthonypernia/'
        },
        {
            iconDark: TwitterImageDark,
            iconLight: TwitterImageLight,
            url: 'https://twitter.com/AnthonyPerniaH'
        },
        {
            iconDark: InstagramImageDark,
            iconLight: InstagramImageLight,
            url: 'https://www.instagram.com/anthonyperniah/'
        },
        {
            iconDark: YoutubeImageDark,
            iconLight: YoutubeImageLight,
            url: 'https://www.youtube.com/@anthonypernia'
        }
    ]);

    return (
        <PageContext.Provider value={{ urlRepo, socialMedia }}>
            {children}
        </PageContext.Provider>
    )

}

export default ContextPage
