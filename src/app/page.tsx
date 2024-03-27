
export default async function Page() {

  const testEnvVar = process.env.TEST_ENV_VAR;
  
  return <div>
    <h1>Home page {testEnvVar}</h1>
  </div>
}