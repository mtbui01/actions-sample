import * as core from '@actions/core';
import * as installer from './installer';

async function run() {
  try {
    let version = core.getInput('ant-version');
    if (version) {
      await installer.getAnt(version);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
