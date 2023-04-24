import Layout from "../components/layout"
import NavBar from "../components/navbar"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import styles from "./lists.module.scss"

const Lists = () => (
    <Layout>
        <NavBar></NavBar>
        <h4>The following are lists of places/things I want to see/do in my lifetime. Please reach out if you have any suggestions!</h4>
        <Tabs>
            <TabList>
                <Tab>Travel</Tab>
                <Tab>Movies</Tab>
                <Tab>Shows</Tab>
                <Tab>Games</Tab>
            </TabList>

            <TabPanel>
                <div className={styles.tabList}>
                    <ul>
                        <li>Acadia National Park</li>
                        <li>Alabama football game</li>
                        <li>Amazon</li>
                        <li>Amsterdam</li>
                        <li>Army/Navy football game</li>
                        <li>Azores</li>
                        <li>Bhutan</li>
                        <li>Budapest</li>
                        <li>Charleston</li>
                        <li>Chiapas</li>
                        <li>Chile</li>
                        <li>Colombia</li>
                        <li>Copenhagen</li>
                        <li>Dominican Republic</li>
                        <li>Egypt</li>
                        <li>Ethiopia </li>
                        <li>Greece</li>
                        <li>Guatemala</li>
                        <li>Hawaii</li>
                        <li>Hong Kong</li>
                        <li>Iceland</li>
                        <li>India</li>
                        <li>Ireland</li>
                        <li>Israel</li>
                        <li>Istanbul </li>
                        <li>Italy</li>
                        <li>Kenya</li>
                        <li>London</li>
                        <li>LSU football game</li>
                        <li>Malta</li>
                        <li>Memphis</li>
                        <li>Michigan football game</li>
                        <li>Monaco/French Riviera </li>
                        <li>New Orleans</li>
                        <li>New Zealand</li>
                        <li>Northern Alabama</li>
                        <li>Norway</li>
                        <li>Oaxaca</li>
                        <li>Patagonia</li>
                        <li>Penn St football game</li>
                        <li>Peru</li>
                        <li>Santa Fe</li>
                        <li>Scotland</li>
                        <li>Sichuan</li>
                        <li>Singapore</li>
                        <li>Smoky Mountains</li>
                        <li>South Korea</li>
                        <li>Southern Spain </li>
                        <li>Sri Lanka</li>
                        <li>Tennessee football game</li>
                        <li>The Galapagos Islands</li>
                        <li>Tibet</li>
                        <li>Tierra del Fuego</li>
                        <li>Toronto</li>
                        <li>Tunisia</li>
                        <li>Utah National Parks</li>
                        <li>Vienna</li>
                        <li>Vietnam</li>
                        <li>Western Nebraska</li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel>
                <div className={styles.tabList}>
                    <ul>
                        <li>21 Grams</li>
                        <li>Blazing Saddles</li>
                        <li>Chungking Express</li>
                        <li>Cure</li>
                        <li>Days of Being Wild</li>
                        <li>Drive My Car</li>
                        <li>Drive</li>
                        <li>Everything Everywhere All At Once</li>
                        <li>Face/Off</li>
                        <li>Fear and Loathing in Las Vegas</li>
                        <li>Flags of our Fathers</li>
                        <li>Happy Together</li>
                        <li>Hell or High Water</li>
                        <li>Hold Me Back</li>
                        <li>Ikiru</li>
                        <li>In the Mood for Love</li>
                        <li>Infernal Affairs</li>
                        <li>Isle of Dogs</li>
                        <li>It's a Summer Film!</li>
                        <li>Kagemusha</li>
                        <li>Letters from Iwo Jima</li>
                        <li>Manchester by the Sea</li>
                        <li>MASH</li>
                        <li>Never Cry Wolf</li>
                        <li>Nomadland</li>
                        <li>Nope</li>
                        <li>Pale Flower</li>
                        <li>Paris, Texas</li>
                        <li>Ran</li>
                        <li>Rashomon</li>
                        <li>Roma</li>
                        <li>Rushmore</li>
                        <li>Seopyeonje</li>
                        <li>Seven Psycopaths</li>
                        <li>Seven Samurai</li>
                        <li>Sicario</li>
                        <li>Some Like it Hot</li>
                        <li>The Black Stallion</li>
                        <li>The Bridge on the River Kwai</li>
                        <li>The French Dispatch</li>
                        <li>The Graduate</li>
                        <li>The Grandmaster</li>
                        <li>The Host</li>
                        <li>The Post</li>
                        <li>The Power of the Dog</li>
                        <li>The Royal Tenenbaums</li>
                        <li>The Unbearable Weight of Massive Talent</li>
                        <li>The Usual Suspects</li>
                        <li>Throne of Blood</li>
                        <li>THX 1138</li>
                        <li>Tokyo Drifter</li>
                        <li>Train to Busan</li>
                        <li>Trainspotting</li>
                        <li>Triangle of Sadness</li>
                        <li>True Grit</li>
                        <li>Vice</li>
                        <li>Whiplash</li>
                        <li>Yojimbo</li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel>
                <div className={styles.tabList}>
                    <ul>
                        <li>Barry</li>
                        <li>Better Call Saul</li>
                        <li>Copenhagen Cowboy</li>
                        <li>Cunk on Earth</li>
                        <li>Derry Girls</li>
                        <li>Don't Hug Me I'm Scared</li>
                        <li>Foundation</li>
                        <li>Players</li>
                        <li>Regular show</li>
                        <li>Succession</li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel>
                <div className={styles.tabList}>
                    <ul>
                        <li>A Plague Tale: Innocence</li>
                        <li>Alien: Isolation</li>
                        <li>Assassin's Creed Odyssey</li>
                        <li>Assassin's Creed Origins</li>
                        <li>Assassin's Creed Valhalla</li>
                        <li>Bloodborne</li>
                        <li>Celeste</li>
                        <li>Cult of the Lamb</li>
                        <li>Cuphead</li>
                        <li>Dark Souls 2</li>
                        <li>Dark Souls 3</li>
                        <li>Dead Space (2008)</li>
                        <li>Death Stranding</li>
                        <li>Disco Elysium</li>
                        <li>Dishonored</li>
                        <li>Don't Starve</li>
                        <li>Doom (2016)</li>
                        <li>Elden Ring</li>
                        <li>FTL</li>
                        <li>God of War (2018)</li>
                        <li>Good Job!</li>
                        <li>Hades</li>
                        <li>Half-Life</li>
                        <li>Hellblade: Senua's Sacrifice</li>
                        <li>Hollow Knight</li>
                        <li>Hotline Miami</li>
                        <li>Hyper Light Drifter</li>
                        <li>Jotun</li>
                        <li>Little Nightmares II</li>
                        <li>Middle-Earth: Shadow of War</li>
                        <li>Mirror's Edge</li>
                        <li>Moonlighter</li>
                        <li>Nier Automata</li>
                        <li>No Man's Sky</li>
                        <li>Ori and the Blind Forest</li>
                        <li>Papers Please</li>
                        <li>Remnant: From the Ashes</li>
                        <li>Returnal</li>
                        <li>Rim World</li>
                        <li>Rogue Legacy</li>
                        <li>Sable</li>
                        <li>Salt & Sanctuary</li>
                        <li>Sekiro: Shadows Die Twice</li>
                        <li>Shadow of the Colossus</li>
                        <li>Sons of the Forest</li>
                        <li>Spelunky</li>
                        <li>Stardew Valley</li>
                        <li>Strange Horitculture</li>
                        <li>Terraria</li>
                        <li>The Last of Us</li>
                        <li>This War of Mine</li>
                        <li>Tunic</li>
                        <li>Unititled Goose Game</li>
                        <li>Valheim</li>
                        <li>Vampire Survivors</li>
                    </ul>
                </div>
            </TabPanel>
        </Tabs>
    </Layout >
)

export default Lists
