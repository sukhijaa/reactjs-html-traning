import React from 'react';
import {describe, it, before, beforeEach} from "mocha";
import {expect} from "chai/index";
import {shallow} from "enzyme";

global.describe = describe;
global.expect = expect;
global.it = it;
global.before = before;
global.beforeEach = beforeEach;
global.shallow = shallow;
global.React = React;