import React from 'react';
// import  {Landing}  from '../Homepage/Landing';
import imglogo from "../images/bulb.jpg";
import imglogo2 from "../images/dr raddy.jpg";
import imglogo3 from "../images/idea.jpg";
import "./BodySection.css"
export const BodySection = () => {
    return (
        <div>
            {/* images */}
            <img className="bulb" src={imglogo}></img>
            <img className="dr" src={imglogo2}></img>
            {/*heading  */}
             <h1> Research and Development Cell</h1>
                 <h1> Director : Dr. Ramesh Reddy</h1>
                 <br/><br/><br/><br/>
                        <h2 className="vision"><span style={{color:'maroon'}}>Vision</span><hr className="one"/></h2>
                        
                        <h3 className="p"><p>R & D centre at NSAKCET shall blossom into a Nodal Centre 
                         of National importance with global network.</p></h3>
                                       <br/>
           <h2 className="Mission"><span style={{color:'maroon'}}>Mission</span><hr className="two"/></h2>     
           <p className="Mission"> R&D centre at NSAKCET shall strive to be known for its applied research catering to the
                societal and technological needs of mankind. It would strive to provide State of the art
                infrastructure supporting young scholars in research and development activities and Contribute
                towards engineering areas of Civil, Mechanical, Electrical, Electronics, Communications,
                Computer and Information Technology.</p>      
                <br/>
             <h2 className="Mission"><span style={{color:'maroon'}}>About the Director</span><hr className="there"/></h2>
             <p className="Mission">Dr. Ramesh Reddy Passed B.Tech. in Civil Engineering in 1974 from Jawaharlal Nehru
             Technological University (JNTU) and stood first from among the JNTU, OU and REC Warangal
             Colleges. He secured direct admission into IIT Delhi, for his scholastic record for pursuing, Post
             Graduate course, M.Tech. Structures in the year 1976. He did his Ph.D. in the year 1992 from
             IIT Delhi in the thrust area of Artificial Intelligence and Expert System probably the first in the
             nation and among the twenty in the world. He actively worked for welfare of staff and students
             during his stay at IIT Delhi even risking his academic career. For which act of selflessness he
             was awarded <i><b>Outstanding service award for the welfare of staff and students” by President of
             India, Hon’ble Late Shri Fakruddin Ali Ahamad in the year 1975.</b></i>
             He was the Dean of Osmania University, Hyderabad from 2007-2009.He has held positions like 
             Principal, Dean, Managing Director, Chairman, Partner and many more. He has more than 60    
             national and international publications to his name. He has also organised 24 conferences and
             has been conferred with 27 awards. He has guided 11 PhD’s so far and many more are in the
             pipeline.</p>
             <br/><br/>
             <div>
                 <h1>DIRECTOR’s MESSAGE</h1>
                 <br/><br/>
                 <p className="di">Research is the backbone of academics. It simplifies concept building and transforms new ideas
into innovations in pursuance of a new era of passion for researches. Each finding gives immense
pleasure and multiplies enthusiasm towards achieving target.
The Research and Development Cell aims to nurture research culture in the College by
promoting research in newly emerging and challenging areas of Engineering and Technology. It
encourages the students and faculty to undertake the research in newly emerging frontier areas.
This enhances the general research capability of budding technocrats by way of participating in
conferences, seminars, workshops, project competition, etc.
Introduction Teaching and Research are the main functions assigned to any institute. Teaching is
a prime function and needs to be performed at the highest level of competence that is possible
only when the faculty is involved in the research activity. Research is an original contribution to
the existing stock of knowledge making for its advancement. It is the pursuit of truth with the
help of study, observation, comparison, experiment, collection of facts or data, analyzing the
facts to reach certain conclusions either in the form of solution(s) towards the concerned problem
or in certain generalizations for some theoretical formulation. In short, the search for knowledge
through objective and systematic method of finding solution to a problem is research. Research
essentially nourishes the academic program and such engagement helps teachers to remain at the
cutting edge, with advances in their own subject. Importantly, it helps the institute to stand at the
global level. The R&D cell comprises of faculty members from various departments in the
institute. This committee oversees the smooth and efficient coordination of research and
development activities in the institute, thus fostering overall growth</p>
      <img className="logo" src={imglogo3}/>
      <br/><br/>
      <h1 className="p"><p>The Research and Development Cell is functioning with the following
objectives:</p></h1>

      
             </div>
        </div>
    );
};

