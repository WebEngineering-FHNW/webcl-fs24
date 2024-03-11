
import { total }      from "./kolibri/util/test.js";
import { versionInfo} from "./kolibri/version.js";


import './todo/todoTest.js'
import './person/personTest.js'

import './kolibri/allKolibriTestsSuite.js';

total.onChange( value => document.getElementById('grossTotal').textContent = "" + value + " tests done.");

document.querySelector("footer").textContent = "Built with Kolibri " + versionInfo;
