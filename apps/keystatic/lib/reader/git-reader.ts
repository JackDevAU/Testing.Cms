import keystaticConfig from '@/keystatic.config';
import { createGitHubReader } from '@keystatic/core/reader/github';

export const gitReader = createGitHubReader(keystaticConfig, {
    repo: 'Thinkmill/keystatic-data',
    token: process.env.GITHUB_PAT,
});