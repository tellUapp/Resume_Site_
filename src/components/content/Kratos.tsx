import FadeIn from "@rcnoverwatcher/react-fade-in-react-18/src/FadeIn";
import { useRef, useEffect } from "react";
import { useMyContext } from "../../my-context";
import KratosLogo from '../../assets/Kratos.webp';
import cplusplus_logo from '../../assets/c++-logo.png';
import Visualstudio_Logo from '../../assets/visualstudio_logo.png';
import Matlab_Logo from '../../assets/matlab-logo.png';
import Bitbucket_Logo from '../../assets/bitbucket-logo.png';
import Sourcetree_Logo from '../../assets/sourcetree-logo.svg';
import Powershell_Logo from '../../assets/powershell-logo.png';
import XQ58_Logo from '../../assets/xq58-logo.png';

import './Page.css';

const Kratos = () => {
  const context = useMyContext();

  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          context.setCurrPage('Kratos');
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) observer.unobserve(pageRef.current);
    };
  }, []);

  return (
    <FadeIn delay={1500} transitionDuration={750}>
      <div ref={pageRef} className="component-container" id='Kratos'>
        <div className="content-wrapper">
          <div className="text-area">
            <h1>Kratos Defense & Security Solutions</h1>
            <p>
              One of my current positions is at Kratos Defense as a software engineering intern. Some of my tasks include
              <br /><br />
              <ul>
                <li className='task-list'>Working with static analysis tool to debug C/C++ embedded software</li>
                <li className='task-list'>Writing unit tests for C++ vehicle code using catch2 framework and incorporated into Microsoft Visual Studio</li>
                <li className='task-list'>Writing Bash/PowerShell scripts to automate testing of flight code and incorporated into Bamboo</li>
                <li className='task-list'>Led sprint meetings for multiple teams and projects; handled other DevOps tasks.</li>
                <li className='task-list'>Used MATLAB to perform flight simulations</li>
              </ul>
            </p>
            <br />
            <p className='p-title'>Tools used:</p>
            <div className='stack-logos'>
              <ul>
                <li>
                  <a role='button' href='https://cplusplus.com/' target='_blank' rel="noopener noreferrer">
                    <img alt='C++ Logo' src={cplusplus_logo} />
                  </a>
                </li>
                <li>
                  <a role='button' href='https://visualstudio.microsoft.com/' target='_blank' rel="noopener noreferrer">
                    <img alt='Visual Studio Logo' src={Visualstudio_Logo} />
                  </a>
                </li>
                <li>
                  <a role='button' href='https://www.mathworks.com/' target='_blank' rel="noopener noreferrer">
                    <img alt='Matlab Logo' src={Matlab_Logo} />
                  </a>
                </li>
                <li>
                  <a role='button' href='https://www.sourcetreeapp.com/' target='_blank' rel="noopener noreferrer">
                    <img alt='Sourcetree Logo' src={Sourcetree_Logo} />
                  </a>
                </li>
                <li>
                  <a role='button' href='https://learn.microsoft.com/en-us/powershell/' target='_blank' rel="noopener noreferrer">
                    <img alt='Powershell Logo' src={Powershell_Logo} />
                  </a>
                </li>
                <li>
                  <a role='button' href='https://bitbucket.org/product' target='_blank' rel="noopener noreferrer">
                    <img alt='Bitbucket Logo' src={Bitbucket_Logo} />
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <p>
              <a className={'KratosLink'} href="https://www.kratosdefense.com/" target='_blank' rel="noopener noreferrer">Visit Company Site</a>
            </p>
          </div>
          <div className="image-area">
            <img draggable={false} id='kratosLogo' style={{ borderRadius: '7.5px' }} src={KratosLogo} alt="Kratos Logo" />
            <img draggable={false} id='kratosLogo' style={{ borderRadius: '7.5px' }} src={XQ58_Logo} alt="Kratos Logo" />
          </div>
        </div>
      </div>
    </FadeIn>
  )
};

export default Kratos;