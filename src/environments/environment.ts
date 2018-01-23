// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  meetup: {
    apiKey: '847242b29645f52c5c68566d17566b'
  },
  weather: {
    apiKey: '214cc40c26523dcdcdf43a954c23981a'
  }
};
