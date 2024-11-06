import {execSync} from 'node:child_process';

const result = String(execSync('node isPrime 19')).trim().replace('\n', ' ');

console.assert(result === '8', 'НЕУДАЧА!')