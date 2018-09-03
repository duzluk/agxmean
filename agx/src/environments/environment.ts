// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  URLRestFullApi: "/api",
  Sidenav: [
    { id: "1", definition: "Tohum Tanımları", imageurl: "local_florist", routeurl: '/seed.card' },
    { id: "2", definition: "Ürün Sorumluları", imageurl: "people_outline", routeurl: '/person' },
    { id: "3", definition: "Üreticiler", imageurl: "nature_people", routeurl: '/grow' },
    { id: "4", definition: "Deneme Tohum Listesi", imageurl: "swap_horiz", routeurl: '/seed.input' },
    { id: "6", definition: "Yıllık Deneme Planı Girişi", imageurl: "playlist_add", routeurl: '/seed.trial' },
    { id: "7", definition: "Gözlem Tablosu", imageurl: "visibility", routeurl: "/seedObservation" },
    { id: "8", definition: "Ürün Pazar Profil Tablosu", imageurl: "bar_chart", routeurl: "/productmarketprofile" },
    { id: "9", definition: "Rakip Firmalar", imageurl: "business", routeurl: "/competitor" },
    {
      id: "5", definition: "Ayarlar", imageurl: "settings",
      subitms:
        [
          { id: "51", definition: "Çalışma Dönemi", imageurl: "perm_data_setting", routeurl: "" },
          { id: "52", definition: "Kullanıcı Tanımları", imageurl: "account_box", routeurl: "/user" },
          { id: "54", definition: "Gözlem Tanımları", imageurl: "settings_input_component", routeurl: "/observationDefinition" }
        ]
    }
  ]
};
