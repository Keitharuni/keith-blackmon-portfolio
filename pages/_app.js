import React from "react";
import App, { Container } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import { PageTransition } from "next-page-transitions";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/_appStyles";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div className={this.props.classes.myApp}>
          <Navbar />
          <PageTransition timeout={300} classNames='page-transition'>
            <Component {...pageProps} />
          </PageTransition>
        </div>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Container>
    );
  }
}

export default withStyles(styles)(MyApp);
