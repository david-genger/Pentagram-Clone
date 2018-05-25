import App, { Container } from 'next/app'
import React from 'react'
import { CSSTransition, TransitionGroup, Transition  } from 'react-transition-group'
import Layout from '../components/Layout'
import { PageTransition } from 'next-page-transitions'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

export default class MyApp extends App {
    

  render () {
    const { Component, pageProps } = this.props
    console.log(this.props);
    return (
      <Container>
        <Layout>
          <PageTransition classNames="fade"
              timeout={600} classNames="page-transition">

              <Component {...pageProps} />
          </PageTransition>
        </Layout>
        <style jsx global>{`
        .page-transition {
            background: #f1f1f1;
        }
          .page-transition-enter {
            opacity: 0.3;
            transform: scale(0.95);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: scale(1);
            transition: all 600ms;
          }
          .page-transition-exit {
            opacity: 1;
            transform: scale(1);
          }
          .page-transition-exit-active {
            opacity: 0.3;
            transform: scale(0.95);
            transition: all 600ms;
          }
        `}</style>
      </Container>
    )
  }
}