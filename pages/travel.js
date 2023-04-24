import Layout from "../components/layout"
import NavBar from "../components/navbar"

import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";


const Travel = () => {

    return (
        <Layout>
            <NavBar></NavBar>
            <h4>The colored in countries are ones I have visited so far.</h4>
            <ComposableMap>
                <ZoomableGroup>
                    <Geographies geography="/features.json">
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={geo.properties.visited ? "#EAEAB4" : "#FFFFFF00"}
                                    stroke="#000000"
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <h4>To be honest, I thought this would look way cooler. While I have been very fortunate to be able to travel to other countries, there is still so much more out there to see.</h4>
        </Layout>
    );
};

export default Travel;