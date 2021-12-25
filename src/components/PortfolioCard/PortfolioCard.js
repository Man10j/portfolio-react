import React from 'react';
import './PortfolioCard.css';

const PorfolioCard = ()=>{
    return(
        <div className='portfoliocard'>
            <div className="workcard_portfolio">
                <div className='portfoliocard_main'>
                <img className='wrkimg_portfolio' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
                <h2 className='portfoliocard_head'>Movie Search app</h2>
                <p className='portfolio_lib'>React | React Redux | React router</p>
                <p className='portfolio_desc'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                <div className='portfolio_link_icons'>
                <div className='portfolio_icon'><a href="#"><i className="fab fa-github"></i><span className='porfolio_linktext'>Git</span></a></div>
                <div className='portfolio_icon'><a href="#"><i className="fas fa-external-link-square-alt"></i><span className='porfolio_linktext'>View</span></a></div>
                 </div>
                </div>
            </div>
        </div>
    )
}
export default PorfolioCard;