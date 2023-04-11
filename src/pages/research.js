import React from "react"

import styles from "./projects.module.scss"

import Layout from "../components/layout"
import NavBar from "../components/navbar"
import Text from "../components/text"
import Paper from "../components/paper"

const Research = () => (
    <Layout>
        <NavBar></NavBar>
        <Text>
            <ul style={{ paddingLeft: "0", marginLeft: "0" }}>
                <li>
                    <Paper
                        alt="An overview of multi-member districts: an analysis of the United States and New Zealand"
                        link="/mmd-paper/"
                        title="An overview of multi-member districts: an analysis of the United States and New Zealand"
                        description="Independent research project done under the supervision of Dr. Silvia Borzutzky regarding multi-member districts. The research covers the history of MMDs in the United States, the electoral systems associated with MMDs, and an analysis of the 1993 New Zealand electoral reform to proportional representation and multi-member districts.">
                    </Paper>
                </li>
                <li>
                    <Paper
                        alt="Policy Memo: Gun Rights"
                        link="/memo3/"
                        title="Policy Memo: Gun Rights"
                        description="A policy memo addressing judicial review and gun rights in the Supreme Court. Written for 90-714 Domestic Policy class.">
                    </Paper>
                </li>
                <li>
                    <Paper
                        alt="Policy Memo: Voting Rights"
                        link="/memo2/"
                        title="Policy Memo: Voting Rights"
                        description="A policy memo addressing discussing voting rights in the US in the context of federalism. Written for 90-714 Domestic Policy class.">
                    </Paper>
                </li>
            </ul>
        </Text>
    </Layout>
)

export default Research
