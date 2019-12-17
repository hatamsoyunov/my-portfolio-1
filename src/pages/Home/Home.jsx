import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';

import './Home.sass';

// Page sections
import HomeSection from './sections/HomeSection/HomeSection';
import SkillsSection from './sections/SkillsSection/SkillsSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';

export default function Home(props) {
	return (
		<ReactFullpage
			licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
			lockAnchors={false}
			anchors={['home', 'skills', 'projects']}
			navigation={true}
			navigationPosition={'right'}
			navigationTooltips={['01', '02', '03']}
			showActiveTooltip={true}
			scrollingSpeed={900}
			easingcss3="cubic-bezier(0.65, 0.05, 0.36, 1)"
			scrollOverflow={true}
			// scrollOverflowOptions={{
			// 	disableMouse: true,
			// 	disablePointer: true,
			// 	disableTouch: false
			// }}
			// normalScrollElements="#projects"
			animateAnchor={false}
			autoScrolling={true}
			scrollBar={false}
			fitToSection={false}
			verticalCentered={false}
			paddingTop="0"
			paddingBottom="0"
			responsiveWidth={768}
			// afterResponsive={() => window.fullpage_api.destroy('all')}
			onLeave={props.fpOnLeave.bind(this)}
			render={({ fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						<div>
							<HomeSection fullpageApi={fullpageApi} />

							<SkillsSection />

							<ProjectsSection limit={6} step={3} />
						</div>
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	);
}
