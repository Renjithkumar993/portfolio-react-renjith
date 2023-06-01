import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  
  return (
    
<VerticalTimeline>
  
  <section id='experience'>
  <VerticalTimelineElement 
    className="vertical-timeline-element--work "
    contentStyle={{ background: '#14143a ', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - present"
    iconStyle={{ background: 'red', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Advanced Support</h3>
    <h4 className="vertical-timeline-element-subtitle">Service NewBrunswick</h4>
    <h4 className="vertical-timeline-element-subtitle">Fredericton, NB</h4>
    <p>
     Office365, Powershell, Exchange online , Azure Cloud
    </p>
  </VerticalTimelineElement>

  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2022"
    contentStyle={{ background: '#14143a', color: '#fff' }}
    iconStyle={{ background: 'red', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Technical Analayst</h3>
    <h4 className="vertical-timeline-element-subtitle">Service NewBrunswick</h4>
    <h4 className="vertical-timeline-element-subtitle">Fredericton NB</h4>
    <p>
    Office365, Powershell, Exchange online , Azure Cloud,
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2018 - 2019"
    contentStyle={{ background: '#14143a', color: '#fff' }}
    iconStyle={{ background: 'red', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Technical Operator</h3>
    <h4 className="vertical-timeline-element-subtitle">Service NewBrunswick</h4>
    <h4 className="vertical-timeline-element-subtitle">Moncton NB</h4>
    <p>
      SCCM, Active Direcotry Management
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2017 - 2017"
    contentStyle={{ background: '#14143a ', color: '#fff' }}
    iconStyle={{ background: 'red', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">IT Support Analyst</h3>
    <h4 className="vertical-timeline-element-subtitle">Wyndham world wide</h4>
    <h4 className="vertical-timeline-element-subtitle">SaintJohn NB</h4>
    <p>
      Client support , lync ,VPN 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2016- 2017"
    contentStyle={{ background: '#14143a ', color: '#fff' }}
    iconStyle={{ background: 'red', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Technnical support</h3>
    <h4 className="vertical-timeline-element-subtitle">Norida</h4>
    <h4 className="vertical-timeline-element-subtitle">Saintjohn NB</h4>
    <p>
     customer service and techncial support
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015-2016"
    contentStyle={{ background: '#14143a ', color: '#fff' }}
    iconStyle={{ background: 'red', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Technical Support</h3>
    <h4 className="vertical-timeline-element-subtitle">Transcom</h4>
    <h4 className="vertical-timeline-element-subtitle">Brockvile ON</h4>
    <p>
    customer service and techncial support
    </p>
  </VerticalTimelineElement>
  </section>
</VerticalTimeline>
  )
}
