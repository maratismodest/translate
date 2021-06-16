import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './provider/AuthProvider'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://server-chamala.herokuapp.com/graphql',
  // uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
      <AuthProvider>
      <App />
      </AuthProvider>
    </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
