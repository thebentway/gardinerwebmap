/*--------------------------------------------------------------------
MAP SETUP
--------------------------------------------------------------------*/

mapboxgl.accessToken = "pk.eyJ1IjoidGhlYmVudHdheSIsImEiOiJjbGYxZDF2YzEwNzYyM3lwamZpN2l5bTBvIn0.qbdgGsK7vFgXT89nqeWsOQ"; //bentway account token

const maxBounds = [
    [-79.6772, 43.4400], // SW coords
    [-79.04763, 44.03074] // NE coords
];

// create map
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/thebentway/clf1fgyov008v01ns3szd1b9z",
    center: [-79.38633, 43.64015], // starting center in [lng, lat]
    zoom: 13,
    maxBounds: maxBounds // Set the map's geographical boundaries.
});

// adding title/logo

document.getElementById('info').innerHTML = `
<svg width="360px" height="65px" viewBox="0 0 360 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Map Created By Ananmay Sharan and Talha Vaince for The Bentway</title>
    <g id="logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Group" fill-rule="nonzero">
        <path d="M0,14.073957 C0,16.3945269 0.705934458,18.2931505 2.11775081,19.7698817 C3.52961973,21.2465591 5.35324433,22 7.61805825,22 C9.88287218,22 11.7064968,21.2465591 13.1183131,19.7698817 C14.530182,18.2931505 15.2361165,16.3945269 15.2361165,14.073957 L15.2361165,0.452043015 L11.2653074,0.452043015 L11.2653074,14.2548064 C11.2653074,16.5452258 10.0593689,18.0822043 7.61805825,18.0822043 C5.17674757,18.0822043 3.97080906,16.5753226 3.97080906,14.1945054 L3.97080906,0.452043015 L0,0.452043015 L0,14.073957 Z M24.2105928,21.547957 L24.2105928,8.01644086 L31.5933396,21.547957 L35.2111551,21.547957 L35.2111551,0.452043015 L31.210965,0.452043015 L31.210965,13.9835591 L23.9164666,0.452043015 L20.2397837,0.452043015 L20.2397837,21.547957 L24.2105928,21.547957 Z M43.9798061,4.36989246 L47.4799396,4.36989246 C48.8035602,4.36989246 49.6859914,4.82193548 50.1859954,5.69587097 C50.6859995,6.56986022 50.9507446,8.2273871 50.9507446,10.6685054 C50.8624963,16.5150753 49.950684,17.6301613 47.3034954,17.6301613 L43.9798061,17.6301613 L43.9798061,4.36989246 Z M47.3034954,21.547957 C52.3919946,21.547957 54.9216063,17.9315054 54.9216063,10.6685054 C54.9216063,3.85754838 52.4508094,0.452043015 47.4799396,0.452043015 L40.008997,0.452043015 L40.008997,21.547957 L47.3034954,21.547957 Z M73.7791124,21.547957 L73.7791124,17.6301613 L64.7198567,17.6301613 L64.7198567,12.4164301 L72.9554959,12.4164301 L72.9554959,8.49863441 L64.7198567,8.49863441 L64.7198567,4.36989246 L73.7791124,4.36989246 L73.7791124,0.452043015 L60.7489425,0.452043015 L60.7489425,21.547957 L73.7791124,21.547957 Z M84.0183419,21.547957 L84.0183419,13.2602688 L86.3714568,13.2602688 L90.1952027,21.547957 L94.607096,21.547957 L90.4595799,12.5369785 C92.7243939,11.2410968 93.7246122,9.52326882 93.7246122,6.84110752 C93.7246122,5.03288172 93.1070313,3.52605375 91.8713437,2.29041935 C90.6656155,1.05478495 89.1949844,0.452043015 87.4594505,0.452043015 L80.0474277,0.452043015 L80.0474277,21.547957 L84.0183419,21.547957 Z M84.0183419,4.36989246 L87.4594505,4.36989246 C88.6657044,4.36989246 89.753698,5.36437635 89.753698,6.90135484 C89.6653971,8.95067742 88.2536333,9.40272044 87.4594505,9.34247312 L84.0183419,9.34247312 L84.0183419,4.36989246 Z M129.645223,14.284957 C129.61579,16.5753226 128.438969,18.0822043 125.998079,18.0822043 C124.674091,18.0822043 123.733265,17.5397097 123.174026,16.4849247 C122.615312,15.4301398 122.320976,13.4712151 122.320976,10.6685054 C122.320976,5.72602151 123.409495,3.9177957 125.998079,3.9177957 C128.204026,3.9177957 129.409754,5.36437635 129.674657,8.2273871 L133.380668,7.71509676 C133.2335,5.51507527 132.468751,3.67669893 131.086421,2.2000215 C129.733524,0.723290322 128.027424,0 125.998079,0 C121.29185,0 118.350587,3.64660214 118.350587,10.6685054 C118.350587,18.4136989 121.203549,22 125.998079,22 C128.262893,22 130.086202,21.2465591 131.497966,19.7698817 C132.90973,18.2931505 133.616137,16.3945269 133.616137,14.073957 L133.616137,10.5178065 L125.086162,10.5178065 L125.086162,14.284957 L129.645223,14.284957 Z M140.79637,21.547957 L142.002099,17.8712043 L149.032009,17.8712043 L150.237738,21.547957 L154.473555,21.547957 L147.355343,0.452043015 L143.855367,0.452043015 L136.707722,21.547957 L140.79637,21.547957 Z M145.531508,6.72055914 L147.767414,13.9534086 L143.325561,13.9534086 L145.531508,6.72055914 Z M162.859516,21.547957 L162.859516,13.2602688 L165.212631,13.2602688 L169.036377,21.547957 L173.44827,21.547957 L169.301279,12.5369785 C171.566093,11.2410968 172.565786,9.52326882 172.565786,6.84110752 C172.565786,5.03288172 171.948205,3.52605375 170.713043,2.29041935 C169.506789,1.05478495 168.036158,0.452043015 166.30115,0.452043015 L158.888602,0.452043015 L158.888602,21.547957 L162.859516,21.547957 Z M162.859516,4.36989246 L166.30115,4.36989246 C167.506878,4.36989246 168.595398,5.36437635 168.595398,6.90135484 C168.507097,8.95067742 167.095333,9.40272044 166.30115,9.34247312 L162.859516,9.34247312 L162.859516,4.36989246 Z M181.952491,4.36989246 L185.452467,4.36989246 C186.77593,4.36989246 187.658414,4.82193548 188.15826,5.69587097 C188.658632,6.56986022 188.923535,8.2273871 188.923535,10.6685054 C188.835234,16.5150753 187.923316,17.6301613 185.275865,17.6301613 L181.952491,17.6301613 L181.952491,4.36989246 Z M185.275865,21.547957 C190.364732,21.547957 192.893923,17.9315054 192.893923,10.6685054 C192.893923,3.85754838 190.423599,0.452043015 185.452467,0.452043015 L177.981577,0.452043015 L177.981577,21.547957 L185.275865,21.547957 Z M211.31045,21.547957 L211.31045,17.6301613 L206.721955,17.6301613 L206.721955,4.36989246 L211.31045,4.36989246 L211.31045,0.452043015 L198.133112,0.452043015 L198.133112,4.36989246 L202.751041,4.36989246 L202.751041,17.6301613 L198.133112,17.6301613 L198.133112,21.547957 L211.31045,21.547957 Z M221.314211,21.547957 L221.314211,8.01644086 L228.6968,21.547957 L232.315036,21.547957 L232.315036,0.452043015 L228.314688,0.452043015 L228.314688,13.9835591 L221.019874,0.452043015 L217.343297,0.452043015 L217.343297,21.547957 L221.314211,21.547957 Z M251.172016,21.547957 L251.172016,17.6301613 L242.112761,17.6301613 L242.112761,12.4164301 L250.3484,12.4164301 L250.3484,8.49863441 L242.112761,8.49863441 L242.112761,4.36989246 L251.172016,4.36989246 L251.172016,0.452043015 L238.141847,0.452043015 L238.141847,21.547957 L251.172016,21.547957 Z M261.411246,21.547957 L261.411246,13.2602688 L263.764361,13.2602688 L267.588107,21.547957 L272,21.547957 L267.85301,12.5369785 C270.117823,11.2410968 271.118042,9.52326882 271.118042,6.84110752 C271.118042,5.03288172 270.499935,3.52605375 269.264773,2.29041935 C268.059045,1.05478495 266.588414,0.452043015 264.85288,0.452043015 L257.440857,0.452043015 L257.440857,21.547957 L261.411246,21.547957 Z M261.411246,4.36989246 L264.85288,4.36989246 C266.058608,4.36989246 267.147128,5.36437635 267.147128,6.90135484 C267.058827,8.95067742 265.647063,9.40272044 264.85288,9.34247312 L261.411246,9.34247312 L261.411246,4.36989246 Z M277,5 L330,5 L330,1 L277,1 L277,5 Z" id="Combined-Shape" fill="#6ECCB1"></path>
        <path d="M52.807376,52.6249718 L56.9639555,52.6533338 L56.9639555,44.173104 L62.6292195,44.173104 L62.6292195,52.6533338 L66.785799,52.6533338 L66.785799,32.5163333 L62.6292195,32.5163333 L62.6292195,40.5427716 L56.9639555,40.5427716 L56.9639555,32.5163333 L52.807376,32.5163333 L52.807376,52.6249718 Z M133.409552,52.6533338 L133.409552,48.913583 L125.050973,48.913583 L125.050973,32.5163333 L121.146333,32.5163333 L121.146333,52.6533338 L133.409552,52.6533338 Z M82.849078,52.6533338 L82.849078,48.913583 L78.3371536,48.913583 L78.3371536,36.2560325 L82.849078,36.2560325 L82.849078,32.5163333 L69.8921152,32.5163333 L69.8921152,36.2560325 L74.4325141,36.2560325 L74.4325141,48.913583 L69.8921152,48.913583 L69.8921152,52.6533338 L82.849078,52.6533338 Z M46.8577449,45.1465698 C46.5978498,47.8794706 45.4117547,49.2602492 43.2425106,49.2602492 C41.9409641,49.2602492 41.0157995,48.7424701 40.4659816,47.7356201 C39.9166813,46.7287701 39.6272762,44.8589205 39.6272762,42.1835393 C39.6272762,37.4657499 40.6974021,35.7396991 43.2425106,35.7396991 C45.4117547,35.7396991 46.5978498,37.1205294 46.8577449,39.8534302 L50.5019716,39.2493202 C50.3865202,37.2068603 49.6632662,35.4808096 48.3042529,34.0999793 C46.9737141,32.6903893 45.2963033,32 43.2425106,32 C38.6151348,32 35.7226367,35.4808096 35.7226367,42.1835393 C35.7226367,49.5767099 38.528158,53 43.2425106,53 C45.2963033,53 46.9737141,52.3096107 48.3042529,50.9287804 C49.6632662,49.5191904 50.3865202,47.7931397 50.5019716,45.7506798 L46.8577449,45.1465698 Z M26.4441219,32.5163333 C28.1505767,32.5163333 29.5967222,33.0916836 30.7825584,34.2711439 C31.9973352,35.4506041 32.6046718,36.8889539 32.6046718,38.614953 C32.6046718,41.1752435 31.6213156,42.8149633 29.3942939,44.0519431 L29.3942939,44.0519431 L33.4723694,52.6533338 L29.1339846,52.6533338 L25.3739959,44.7423841 L23.0602045,44.7423841 L23.0602045,52.6533338 L19.1556168,52.6533338 L19.1556168,32.5163333 L26.4441219,32.5163333 Z M26.4441219,36.2560841 L23.0602045,36.2560841 L23.0602045,41.0026333 L26.4441219,41.0026333 C27.2250498,41.0601528 28.613366,40.6286531 28.7001358,38.6724725 C28.7001358,37.205363 27.6299581,36.2560841 26.4441219,36.2560841 L26.4441219,36.2560841 Z M10.470046,32.5163333 L17.4694565,52.6533338 L13.304456,52.6533338 L12.1186197,49.1437128 L5.20608246,49.1437128 L4.02024624,52.6533338 L0,52.6533338 L7.02824757,32.5163333 L10.470046,32.5163333 Z M8.67682136,38.4999139 L6.50762896,45.4040136 L10.8749543,45.4040136 L8.67682136,38.4999139 Z M111.943043,32.5163333 L118.942454,52.6533338 L114.777453,52.6533338 L113.591617,49.1437128 L106.679079,49.1437128 L105.493243,52.6533338 L101.472997,52.6533338 L108.501245,32.5163333 L111.943043,32.5163333 Z M90.1064164,32.5163333 L91.2922526,36.0259544 L94.734051,46.6697532 L98.2047899,36.0259544 L99.3906261,32.5163333 L103.410872,32.5163333 L96.3826248,52.6533338 L92.9408264,52.6533338 L85.9414158,32.5163333 L90.1064164,32.5163333 Z M110.149818,38.4999139 L107.980626,45.4040136 L112.347951,45.4040136 L110.149818,38.4999139 Z" id="Combined-Shape" fill="#FFFFFF"></path>
        <path d="M301.665911,32.5163333 C303.401306,32.5163333 304.87634,33.1204434 306.120057,34.3574232 C307.363723,35.5656432 308,37.0615125 308,38.8450828 C308,40.6286531 307.392663,42.124574 306.206827,43.3615538 C305.090746,44.498702 303.667218,45.1007218 301.984455,45.1676129 L301.665911,45.1738839 L298.281993,45.1738839 L298.281993,52.6533338 L294.377405,52.6533338 L294.377405,32.5163333 L301.665911,32.5163333 Z M261.867735,32.5163333 L265.338526,42.8437231 L268.809317,32.5163333 L272.54052,32.5163333 L272.54052,52.6533338 L268.635881,52.6533338 L268.635881,40.1683935 L266.582088,46.1519741 L264.094964,46.1519741 L262.041689,40.1683935 L262.041689,52.6533338 L258.137049,52.6533338 L258.137049,32.5163333 L261.867735,32.5163333 Z M285.174115,32.5163333 L292.173526,52.6533338 L288.008525,52.6533338 L286.822689,49.1437128 L279.910152,49.1437128 L278.724316,52.6533338 L274.704069,52.6533338 L281.732317,32.5163333 L285.174115,32.5163333 Z M283.380891,38.4999139 L281.211698,45.4040136 L285.579024,45.4040136 L283.380891,38.4999139 Z M301.694851,36.2560325 L298.281993,36.2560325 L298.281993,41.4341331 L301.694851,41.4341331 C303.054227,41.4341331 304.095464,40.2546728 304.095464,38.8450828 C304.095464,37.2341227 302.967457,36.2560325 301.694851,36.2560325 Z" id="Combined-Shape" fill="#FFFFFF"></path>
        <path d="M214.337154,53.047 L214.337154,36.6900373 L218.849078,36.6900373 L218.849078,33.047 L205.892115,33.047 L205.892115,36.6900373 L210.432514,36.6900373 L210.432514,53.047 L214.337154,53.047 Z M197.306571,33 C201.933947,33 204.826445,36.3382622 204.826445,42.7664991 C204.826445,49.8569018 202.020924,53.14 197.306571,53.14 L197.273637,53.139 L197.242511,53.14 C192.610866,53.14 189.821664,49.9710877 189.725222,43.1361655 L189.722637,42.7664991 C189.722637,36.3382622 192.615135,33 197.242511,33 C197.253392,33 197.264218,33.0001007 197.27499,33.0003009 L197.306571,33 Z M197.273637,36.585 L197.242511,36.5865495 C194.697402,36.5865495 193.627276,38.2419144 193.627276,42.7664991 C193.627276,45.3323171 193.916681,47.1255919 194.465982,48.091209 C195.0158,49.0568261 195.940964,49.5534009 197.242511,49.5534009 C197.253425,49.5534009 197.264282,49.5534917 197.27508,49.5536724 L197.306571,49.5534009 C198.608118,49.5534009 199.533282,49.0568261 200.0831,48.091209 C200.632401,47.1255919 200.921806,45.3323171 200.921806,42.7664991 C200.921806,38.2419144 199.85168,36.5865495 197.306571,36.5865495 L197.273637,36.585 Z M227.306571,33 C231.933947,33 234.826445,36.3382622 234.826445,42.7664991 C234.826445,49.8569018 232.020924,53.14 227.306571,53.14 L227.273637,53.139 L227.242511,53.14 C222.610866,53.14 219.821664,49.9710877 219.725222,43.1361655 L219.722637,42.7664991 C219.722637,36.3382622 222.615135,33 227.242511,33 C227.253392,33 227.264218,33.0001007 227.27499,33.0003009 L227.306571,33 Z M227.273637,36.585 L227.242511,36.5865495 C224.697402,36.5865495 223.627276,38.2419144 223.627276,42.7664991 C223.627276,45.3323171 223.916681,47.1255919 224.465982,48.091209 C225.0158,49.0568261 225.940964,49.5534009 227.242511,49.5534009 C227.253425,49.5534009 227.264282,49.5534917 227.27508,49.5536724 L227.306571,49.5534009 C228.608118,49.5534009 229.533282,49.0568261 230.0831,48.091209 C230.632401,47.1255919 230.921806,45.3323171 230.921806,42.7664991 C230.921806,38.2419144 229.85168,36.5865495 227.306571,36.5865495 L227.273637,36.585 Z M172.807376,53.0186385 L176.963956,53.0470005 L176.963956,44.5667707 L182.62922,44.5667707 L182.62922,53.0470005 L186.785799,53.0470005 L186.785799,32.91 L182.62922,32.91 L182.62922,40.9364383 L176.963956,40.9364383 L176.963956,32.91 L172.807376,32.91 L172.807376,53.0186385 Z M163.749402,32.907 C165.484443,32.907 166.959256,33.5111646 168.202676,34.7483808 C169.446096,35.9567613 170.0823,37.4528832 170.0823,39.2366952 C170.0823,41.0205585 169.475033,42.5166805 168.289436,43.7538454 C167.103839,44.9622259 165.571203,45.5664418 163.749402,45.5664418 L160.36613,45.5664418 L160.36613,53.047 L156.4623,53.047 L156.4623,32.907 Z M163.778339,36.6472791 L160.36613,36.6472791 L160.36613,41.8261113 L163.778339,41.8261113 C165.137455,41.8261113 166.17847,40.6465152 166.17847,39.2366952 C166.17847,37.625487 165.050695,36.6472791 163.778339,36.6472791 Z" id="Combined-Shape" fill="#FFFFFF"></path>
    </g>
</g>
</svg>
    `

/*--------------------------------------------------------------------
PAST MAP
--------------------------------------------------------------------*/

// slider

const sliderOptions = {
    elm: 'slider-control',
    layer: 'photos',
    source: 'photos',
    input: false,
    controlWidth: '400px',
    minProperty: 'date',
    maxProperty: 'date',
    // sliderMin: '1878-01-01T00:00:00.000Z',
    // sliderMax: '2000-12-31T00:00:00.000Z',
    // filterMin: '1878-01-01T00:00:00.000Z',
    // filterMax: '2000-12-31T00:00:00.000Z',
    propertyType: 'iso8601',
    rangeDescriptionFormat: 'shortDate',
    descriptionPrefix: 'Date:',
    dontFilterOnLoad: true
}
const control = new RangeSlider(sliderOptions, 'top-left')

map.addControl(control);

map.addControl(new mapboxgl.AttributionControl({
    customAttribution: 'Map design by Ananmay Sharan and Talha Vaince for The Bentway'
    }));

// map load

map.on("load", async () => {

    const geojson_url = await fetch(
        'https://thebentway.github.io/gardinerwebmap/combined_images.geojson'
    );

    const geojson_data = await geojson_url.json();

    // adding images

    const images = geojson_data.features.map(feature => ({
        url: feature.properties.thumb_url,
        id: feature.properties.id
    }));

    Promise.all(
        images.map(img => new Promise((resolve, reject) => {
            map.loadImage(img.url, (error, res) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    map.addImage(img.id, res);
                    resolve();
                }
            });
        }))
    ).then(() => console.log("Images Loaded"));

    map.addSource("photos", {
        type: "geojson",
        data: geojson_data,
    });

    map.addLayer({
        id: "photos",
        type: "symbol",
        source: "photos",
        layout: {
            'icon-image': ['get', 'id'], // reference the image
            'icon-ignore-placement': true,
            'icon-size': 0.25,
            'icon-allow-overlap': true,
            'visibility': 'visible',
        }
    });

    // adding shorelines

    const shoreline_geojson_url = await fetch(
        'https://thebentway.github.io/gardinerwebmap/geojsons/shorelines.geojson'
    );

    const shoreline_geojson_data = await shoreline_geojson_url.json();


    map.addSource('shoreline_overlay', {
        'type': 'vector',
        'url': 'mapbox://thebentway.0i43v4qd'
    });

    map.addLayer({
        'id': '1818',
        'type': 'line',
        'source': 'shoreline_overlay',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'line-color': '#80d0ff', // blue color fill
            'line-width': 5, 
            'line-opacity': 0.8
        },
        'source-layer': 'shorelines_merged-5es47o',
        filter: ["all", ["==", "year", 1818]]
    });

    map.addLayer({
        'id': '1884',
        'type': 'line',
        'source': 'shoreline_overlay',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'line-color': '#0582ff', // blue color fill
            'line-width': 5, 
            'line-opacity': 0.8
        },
        'source-layer': 'shorelines_merged-5es47o',
        filter: ["all", ["==", "year", 1884]]
    });

    map.addLayer({
        'id': '1910',
        'type': 'line',
        'source': 'shoreline_overlay',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'line-color': '#0058b0', // blue color fill
            'line-width': 5, 
            'line-opacity': 0.8
        },
        'source-layer': 'shorelines_merged-5es47o',
        filter: ["all", ["==", "year", 1910]]
    });

    map.addLayer({
        'id': '2022',
        'type': 'fill',
        'source': 'shoreline_overlay',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'fill-color': '#004285', // blue color fill
            'fill-opacity': 0.8
        },
        'source-layer': 'shorelines_merged-5es47o',
        filter: ["all", ["==", "year", 2022]]
    },'photos');

    //  adding popup for past imagery

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'photos', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const title = e.features[0].properties.title;
        const year = e.features[0].properties.date.substring(0, 4);
        const image = e.features[0].properties.url;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(title + "<br>" + year + "<img src='" + image + "'" + " class=popupImage " + "/>")
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the photos layer.
    map.on('mouseenter', 'photos', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'photos', () => {
        map.getCanvas().style.cursor = '';
    });

    // adding shoreline menu

    // If these layers were not added to the map, abort
    if (!map.getLayer('1818') || !map.getLayer('1884') || !map.getLayer('1910') || !map.getLayer('2022')) {
        return;
    }
    // Enumerate ids of the layers.
    const toggleableLayerIds = ['1818', '1884', '1910', '2022'];


    function zoomToLayerExtentShoreline(layerId) {
        const layerFeatures = shoreline_geojson_data.features.filter(f => f.properties.year === Number(layerId));
        const bbox = turf.bbox({
            type: 'FeatureCollection',
            features: layerFeatures,
        });

        const bounds = [
            [bbox[0], bbox[1]],
            [bbox[2], bbox[3]]
        ];
        map.fitBounds(bounds, { padding: { top: 0, bottom: 0, left: 0, right: 150 } });
    }

    // Set up the corresponding toggle button for each layer.
    for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = '';

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
            const clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            const visibility = map.getLayoutProperty(
                clickedLayer,
                'visibility'
            );

            // Toggle layer visibility by changing the layout object's visibility property.
            if (visibility === 'none') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                this.className = 'active';
                zoomToLayerExtentShoreline(clickedLayer);

            } else {
                this.className = '';
                map.setLayoutProperty(
                    clickedLayer,
                    'visibility',
                    'none'
                );
            }
        };

        const layers = document.getElementById('menu');
        layers.appendChild(link);
    }

    // adding theme tag menu filters

    function getTagsFilter(tags) {

        //no tags set
        if ((tags || []).length === 0) return;

        //expression for each tag
        const tagFilters = tags.map(tag => ['in', tag, ['get', 'tags']])

        return ['any'].concat(tagFilters);

    }

    const toggleabletagIds = ['all', 'undergardiner', 'transit', 'people', 'aerial', 'construction', 'traffic'];

    const tagIdToTextContent = {
        'all': 'All',
        'undergardiner': 'Under Gardiner',
        'transit': 'Transit',
        'people': 'People',
        'aerial': 'Aerial',
        'construction': 'Construction',
        'traffic': 'Traffic'
    };

    // Set up the corresponding toggle button for each layer.
    for (const id of toggleabletagIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = tagIdToTextContent[id];
        link.className = 'active';

        // Filter layer when the tag toggle is clicked.
        link.onclick = function (e) {
            const clickedTag = this.id;
            e.preventDefault();
            e.stopPropagation();

            if (clickedTag == 'all') {
                map.setFilter("photos", null); //yeepee!
            } else {
                const allowedTags = []
                allowedTags.push(clickedTag)
                map.setFilter("photos", getTagsFilter(allowedTags)); //yeepee!
            }
        };

        const layers = document.getElementById('tagmenu');
        layers.appendChild(link);
    }


    /*--------------------------------------------------------------------
    PRESENT FEATURES
    --------------------------------------------------------------------*/

    // gardiner route

    map.addSource('route', {
        'type': 'vector',
        'url': 'mapbox://thebentway.41ghap1r'
    });

    map.addLayer(
        {
            'id': 'gardiner',
            'name': 'Gardiner Expressway',
            'type': 'line',
            'source': 'route',
            'source-layer': 'gardiner_route-1rrarv',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round',
                'visibility': 'visible'
            },
            'paint': {
                'line-color': '#dbf2eb',
                'line-width': 3,
                'line-opacity': 0.6
            },
        }, 'photos'
    );

    // bentway route
    map.addSource('bentway-route', {
        'type': 'vector',
        'url': 'mapbox://thebentway.494kqvks'
    });

    map.addLayer(
        {
            'id': 'bentway',
            'name': 'The Bentway',
            'type': 'line',
            'source': 'bentway-route',
            'source-layer': 'bentway_route-3j87ns',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round',
                'visibility': 'none'
            },
            'paint': {
                'line-color': '#fdd100',
                'line-width': 10,
                'line-opacity': 0.6
            },
        }
    );

    // 3d buildings

    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
    ).id;

    map.addLayer(
        {
            'id': 'add-3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'layout': {
                'visibility': 'none'
            },
            'minzoom': 5,
            'paint': {
                'fill-extrusion-color': '#7d7d7d',

                // Use an 'interpolate' expression to
                // add a smooth transition effect to
                // the buildings as the user zooms in.
                'fill-extrusion-height': //['get', 'height'],
                    [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        13,
                        0,
                        13.05,
                        ['get', 'height']
                    ],
                'fill-extrusion-base': //['get', 'min_height'],
                    [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        13,
                        0,
                        13.05,
                        ['get', 'min_height']
                    ],
                'fill-extrusion-opacity': 0.6
            }
        },
        labelLayerId
    );

    const bentway_geojson_url = await fetch(
        'https://thebentway.github.io/gardinerwebmap/bentway_projects.geojson'
    );

    const bentway_geojson_data = await bentway_geojson_url.json();

    // adding images

    const bentway_images = bentway_geojson_data.features.map(feature => ({
        url: feature.properties.thumb_url,
        id: feature.properties.id
    }));

    Promise.all(
        bentway_images.map(img => new Promise((resolve, reject) => {
            map.loadImage(img.url, function (error, res) {
                if (error) throw error;
                map.addImage(img.id, res)
                resolve();
            })
        }))
    ).then(console.log("Bentway Images Loaded"));

    map.addSource("bentway_photos", {
        type: "geojson",
        data: bentway_geojson_data,
    });

    map.addLayer({
        id: "bentway_photos",
        type: "symbol",
        source: "bentway_photos",
        minzoom: 11,
        layout: {
            'icon-image': ['get', 'id'], // reference the image
            'icon-ignore-placement': true,
            'icon-size': 0.25,
            'icon-allow-overlap': true,
            'visibility': 'none',
        }

    });

    //  adding popup

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'bentway_photos', (e) => {
        // Copy coordinates array.
        const b_coordinates = e.features[0].geometry.coordinates.slice();
        const b_title = e.features[0].properties.title;
        const b_year = e.features[0].properties.date;
        const b_season = e.features[0].properties.season;
        const b_artist = e.features[0].properties.artist;
        const b_description = e.features[0].properties.description;
        const b_image = e.features[0].properties.url;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - b_coordinates[0]) > 180) {
            b_coordinates[0] += e.lngLat.lng > b_coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(b_coordinates)
            .setHTML("<h3>" + b_title + "</h3>" + b_artist + "<br>" + b_season + " " + b_year + "<br>" + "<img src='" + b_image + "'" + " class=popupImage" + "/>" + "<br>" + b_description)
            .addTo(map);
    });

    // BUTTONS

    // If these layers were not added to the map, abort
    if (!map.getLayer('bentway_photos') || !map.getLayer('add-3d-buildings')) {
        return;
    }
    // Enumerate ids of the layers.
    const PresentToggleableLayerIds = ['bentway_photos', 'add-3d-buildings'];

    const PresentTagIdToTextContent = {
        'bentway_photos': 'The Bentway',
        'add-3d-buildings': 'Buildings',
    };

    bentwayBounds = [[
        -79.41142742172009,
        43.63583355687243
    ], [
        -79.40292777889691,
        43.638554567828066
    ]]

    // Set up the corresponding toggle button for each layer.
    for (const id of PresentToggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = PresentTagIdToTextContent[id];
        link.className = '';

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
            const clickedLayer = this.id;
            e.preventDefault();
            e.stopPropagation();

            const visibility = map.getLayoutProperty(
                clickedLayer,
                'visibility'
            );

            // Toggle layer visibility by changing the layout object's visibility property.
            if (visibility === 'none') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                this.className = 'active';

                if (clickedLayer === 'add-3d-buildings') {
                    map.easeTo({ zoom: 15, pitch: 60 })
                }

                if (clickedLayer === 'bentway_photos') {
                    map.fitBounds(bentwayBounds)    
                    map.setLayoutProperty('bentway', 'visibility', 'visible');
                }

            } else {
                this.className = '';
                    map.setLayoutProperty(
                        clickedLayer,
                        'visibility',
                        'none'
                    );
                map.easeTo({ zoom: 13, pitch: 0 })
                
                if (clickedLayer === 'bentway_photos') {
                    map.setLayoutProperty('bentway', 'visibility', 'none');
                }
            }
        };

        const layers = document.getElementById('present-menu');
        layers.appendChild(link);
    }

});

