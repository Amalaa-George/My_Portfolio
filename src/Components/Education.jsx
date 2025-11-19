import React from 'react';
import { FaAward } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <div className="education">
      <h4 className="education-heading4">Glimpse Through</h4>
      <h1 className="education-heading1">Education</h1>

      <div className="education-Msc">
        <h2 className="Msc">
          <FaAward /> Master of Science
        </h2>
        <h3 className="msc">
          Data Science <br />
          <span className="cgpa">CGPA - 8.98 (2023-2025)</span></h3>
        <h3 className="uok">University of Kerala, Kariavattom</h3>
      </div>

      <div className="education-Bsc">
        <h2 className="Bsc">
          <FaAward /> Bachelor of Science
        </h2>
        <h3 className="bsc">
          Mathematics <br />
          <span className="cgpa">CGPA - 8.93 (2020-2023)</span></h3>
        <h3 className="mg">Kuriakose Elias College, Mannanam</h3>
        <h3 className="mg">Mahatma Gandhi University, Kottayam </h3>
      </div>

      <div className="education-12">
        <h2 className="twelve">
          <FaAward /> 12th
        </h2>
        <h3 className="bi">Bio-Maths</h3>
        <h3 className="dhse">
          DHSE - State Board of Kerala <br />
          Percentage - 98% (2018-2020)
        </h3>
        <h3 className="saha">St. Aloysius H.S.S Athirampuzha</h3>
      </div>

      <div className="education-10">
        <h2 className="tenth">
          <FaAward /> 10th
        </h2>
        <h3 className="kbpe">KBPE - Kerala Board of Public Examinations</h3>
        <h3 className="ptge">Percentage - 98% (2017-2018)</h3>
        <h3 className="smga">St. Mary's G.H.S Athirampuzha</h3>
      </div>

      <section className="education-extra">
        <h1>Extra Curricular Activities</h1>
        <div>
          <h3>National Service Scheme</h3>
          <h5>2020-2022</h5>
        </div>
        <div>
          <h3>Bharat Scouts and Guides</h3>
          <h5>2018-2020</h5>
        </div>
        <div>
          <h3>Junior Red Cross</h3>
          <h5>2015-2017</h5>
        </div>
      </section>
    </div>
  );
};

export default Education;
