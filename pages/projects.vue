<template>
  <div class="mx-auto w-full max-w-screen-lg px-4 py-8">
    <h1
      class="mb-6 border-b-2 border-b-gray-800 px-2 pb-3 text-xl font-semibold text-gray-100 md:text-3xl"
    >
      Aktuelle Projekte
    </h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Project
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :url="project.url"
        :scopes="project.scopes"
        :multipleLinks="project.multipleLinks"
      />
    </div>
    <h2
      class="mt-12 mb-6 px-2 pb-3 text-lg font-semibold text-gray-100 md:text-2xl"
    >
      Web-Projekte
    </h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <SlimProject
        v-for="(project, index) in webProjects"
        :key="index"
        :title="project.title"
        :url="project.url"
        :scopes="project.scopes"
      />
    </div>
    <h2
      class="mt-12 mb-6 px-2 pb-3 text-lg font-semibold text-gray-100 md:text-2xl"
    >
      Sonstige Projekte
    </h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <SlimProject
        v-for="(project, index) in otherProjects"
        :key="index"
        :title="project.title"
        :url="project.url"
        :scopes="project.scopes"
      />
    </div>
  </div>
</template>

<script lang="ts">
interface SlimProject {
  title: string;
  url?: string;
  multipleLinks?: [string, string, string][];
  scopes?: string[];
}

interface Project extends SlimProject {
  description: string;
  image?: string;
}

export default {
  data() {
    return {
      projects: [
        {
          title: "Findd",
          description: "Netzwerk für kostenlose Unternehmensseiten",
          url: "https://findd.de",
          image: "/images/project_findd.jpg",
          scopes: [
            "PHP",
            "Symfony",
            "JavaScript",
            "(S)CSS",
            "Vue.JS",
            "React Native",
            "Encore",
          ],
        },
        {
          title: "Sociant Hub",
          description: "Automatisiertes Tracken von Followern auf Twitter",
          url: "https://hub.sociant.de",
          image: "/images/project_sociant_hub.jpg",
          scopes: [
            "PHP",
            "Symfony",
            "JavaScript",
            "(S)CSS",
            "React",
            "Styled Components",
          ],
        },
        {
          title: "Remove Twitter View Count",
          description:
            "Browser Extension zum Entfernen von View-Counts unter Tweets",
          multipleLinks: [
            [
              "fab",
              "chrome",
              "https://chrome.google.com/webstore/detail/remove-twitter-view-count/jakjpkmlfjkglaooaodlnomfjdglehge",
            ],
            [
              "fab",
              "firefox",
              "https://addons.mozilla.org/en-US/firefox/addon/remove-view-count-from-twitter/",
            ],
            [
              "fas",
              "code",
              "	https://github.com/Vogeslu/Remove-Twitter-View-Count/raw/main/remove-twitter-view-count.user.js",
            ],
            [
              "fab",
              "github",
              "	https://github.com/Vogeslu/Remove-Twitter-View-Count",
            ],
          ],
          image: "/images/project_twitter_extension.jpg",
        },
        {
          title: "Café Aquarium",
          description: "Web-Applikation für Studentencafé der FH Erfurt",
          url: "https://aqua.fh-erfurt.de",
          image: "/images/project_aqua.jpg",
          scopes: ["Next.JS", "TypeScript", "React", "Styled Components"],
        },
        {
          title: "Deutschland Wählt - Tools",
          description: "Link-Shortener & Tool zum Erstellen von Wahldiagrammen",
          image: "/images/project_wahlen.jpg",
          scopes: ["Next.JS", "TypeScript", "React", "Styled Components"],
        },
        {
          title: "CheckIn",
          description: "Mobile App für Traewelling-Reisetagebuch",
          url: "https://github.com/Vogeslu/checkin-react-native",
          image: "/images/project_checkin.jpg",
          scopes: ["React Native"],
        },
        {
          title: "Findd Market",
          description: "Netzwerk für Designer und Künstler",
          url: "https://findd-market.de",
          image: "/images/project_findd_market.jpg",
          scopes: ["PHP", "Symfony", "JavaScript", "(S)CSS", "Encore"],
        },
      ] as Project[],
      webProjects: [
        {
          title: "XXL-Print",
          url: "https://xxlprint.de",
          scopes: ["HTML", "CSS", "JavaScript", "PHP", "CodeIgniter"],
        },
        {
          title: "Hagemann IT-Systeme",
          url: "https://hit-s.de",
          scopes: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Limeandsugar - event & marketing",
          url: "https://limeandsugar.de",
          scopes: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Ingenieurbüro Rheinländer",
          url: "https://ib-rheinlaender.de",
          scopes: ["HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          title: "Designfanatics",
          scopes: ["HTML", "CSS", "JavaScript", "Node.JS", "Express"],
        },
        {
          title: "Ferienwohnung - Am Landhof",
          url: "https://amlandhof.de",
          scopes: ["HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          title: "Physiotherapie Gutmann",
          url: "https://physiotherapie-gutmann.de",
          scopes: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Reisender Koch",
          url: "https://reisenderkoch.de",
          scopes: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Asian Cargo",
          url: "https://asiancargo.de",
          scopes: ["HTML", "CSS", "JavaScript", "PHP"],
        },
      ] as SlimProject[],
      otherProjects: [
        {
          title: "Fluce App - Customizable Twitter Client",
          scopes: ["Android", "Kotlin", "Java"],
        },
        {
          title: "Project Rave - Mediaplayer",
          url: "https://github.com/Vogeslu/Project-Rave",
          scopes: ["Node.JS", "Electron"],
        },
        {
          title: "Discord Twitch Notifier",
          url: "https://github.com/Sociant/Discord-Twitch-Notifier",
          scopes: ["Node.JS", "Twitch API", "Discord API"],
        },
        {
          title: "Sociant Hub App",
          scopes: ["Node.JS", "Firebase Cloud Messaging", "React Native"],
        },
      ] as SlimProject[],
    };
  },
  setup() {
    useHead({
      title: "Projekte - Luca Voges",
    });
  },
};
</script>
