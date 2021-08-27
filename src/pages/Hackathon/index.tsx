import React from "react";
import {observer} from "mobx-react-lite";
import BasicLayout from "../../Layouts/BasicLayout";
import Banner from "@/pages/Hackathon/components/Banner";
import BuildTrust from "@/pages/Hackathon/components/BuildTrust";
import {Footer} from "@/components/Footer";
import HelpUsGrow from "@/pages/Hackathon/components/HelpUsGrow";
import Tracks from "@/pages/Hackathon/components/Tracks";
import Prizes from "@/pages/Hackathon/components/Prizes";
import Timeline from "@/pages/Hackathon/components/Timeline";
import About from "@/pages/Hackathon/components/About";
import Faq from "@/pages/Hackathon/components/Faq";
import Developer from "@/pages/Hackathon/components/Developer";

const Hackathon=()=>{
	return(
		<>
			<BasicLayout name={'hackathon'}>
				<Banner/>
				<BuildTrust/>
				<HelpUsGrow/>
				<Tracks/>
				<Prizes/>
				<Developer/>
				<Timeline/>
				<About/>
				<Faq/>
				<Footer/>
			</BasicLayout>
		</>
	)
}

export default observer(Hackathon)
