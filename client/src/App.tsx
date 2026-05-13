import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import About from "@/pages/About";

import Franchise from "@/pages/Franchise";

import Media from "@/pages/Media";
import MediaArticle from "@/pages/MediaArticle";

import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { I18nProvider } from "./contexts/I18nContext";
import { HelmetProvider } from "react-helmet-async";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />

        <Route path="/franchise" component={Franchise} />

        <Route path="/media" component={Media} />
        <Route path="/media/:slug" component={MediaArticle} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <I18nProvider>
          <ThemeProvider defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </ThemeProvider>
        </I18nProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
