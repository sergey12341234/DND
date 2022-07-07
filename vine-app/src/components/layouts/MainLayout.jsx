import React from 'react';
import { Outlet } from 'react-router-dom';
import homeImg from '../../images/home-01.svg';
import botIcon from '../../images/bot_icon02.svg';
import avatarIcon from '../../images/customers-02-02-02.svg';
import knowledgeIcon from '../../images/knowledge-02.svg';
import settingsIcon from '../../images/settings-01.svg';

const MainLayout = () => {
    return (
        <main>
            <aside className='main-aside'>
                <ul>
                    <li>
                        <div className="logo">
                            <h2>V</h2>
                        </div>
                    </li>
                    <li>
                        <div className="home">
                            <img src={homeImg} alt="homeImg" />
                        </div>
                    </li>
                    <li>
                        <div className="bottle">
                            <img src={botIcon} alt="botIcon" />
                        </div>
                    </li>
                    <li>
                        <div className="avatar">
                            <img src={avatarIcon} alt="avatarIcon" />
                        </div>
                    </li>
                    <li>
                        <div className="knowledge">
                            <img src={knowledgeIcon} alt="knowledgeIcon" />
                        </div>
                    </li>
                    <li>
                        <div className="settings">
                            <img src={settingsIcon} alt="settingsIcon" />
                        </div>
                    </li>
                </ul>
            </aside>
            <Outlet />
        </main>
    );
};

export default MainLayout;