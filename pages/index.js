import { Fragment } from 'react'

import Head from 'next/head'

const data = require('../data.json')

export default function Home() {
  const KOFFIETJESBEDRAG = 5.00;

  const calculateCoffeeSavingsDays = () => {
    const day_start = data.startday;
    const moment = new Date();
    const days_passed = ((moment - day_start) / (1000 * 60 * 60 * 24)).toFixed(2);
    return parseFloat(days_passed);
  }

  return (
    <Fragment>
      <Head>
        <title>Coffee Savings Tracker</title>
        <meta name="description" content="My personal coffee savings tracker." />
      </Head>

      <main className="container pt-5 coffee">
        <div className="row">
          <div className="col-12">
            <h1>Coffee Savings Tracker!</h1>
            <h2>Sinds {data.startdagsstring} zijn er <br/> {calculateCoffeeSavingsDays()} dagen voorbij! <br/> Dit bespaarde mij voorlopig {(calculateCoffeeSavingsDays() * KOFFIETJESBEDRAG).toFixed(2)} euro!</h2>
          </div>
        </div>
      </main>

      <footer className="container py-3">
        <div className="row">
          <div className="col-12">
            <p className="m-0 p-0">Made with ❤️ by Smashing Impact!</p>
          </div>
        </div>
      </footer>
  </Fragment>
  )
}
