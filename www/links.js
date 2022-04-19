let linkmap = {
  'Statistics Austria': 'https://www.statistik.at',
  'TU Graz': "https://www.tugraz.at/",
  'Statistical Days 2022': 'http://www.stat.tugraz.at/StatisticalDays2022/',
  'Gregor de Cillia': 'https://www.github.com/GregorDeCillia',
  'STATatlas': 'https://www.statistik.at/atlas/',
  'age pyramid': 'https://www.statistik.at/web_de/downloads/webkarto/bev_prognose_neu/',
  'material flows 2019': 'https://kreislaufwirtschaft.statistik.at/kreislaufwirtschaft/en/',
  'economic trend monitor': 'https://monitor.statistik.at/',

  'shiny': 'https://shiny.rstudio.com/',
  'shiny app': 'https://shiny.rstudio.com/',
  'R': 'https://www.r-project.org/',
  'plumber': 'https://www.rplumber.io/',
  'highcharts.js': 'https://www.highcharts.com/',
  'highcharter': 'https://jkunst.com/highcharter/',
  'datatables.js': 'https://datatables.net/',
  'RStudio Connect': 'https://www.rstudio.com/products/connect/',
  'RSConnect': 'https://www.rstudio.com/products/connect/',
  'STATcube': 'https://www.statcube.at/',
  'Open Government Data': 'https://data.statistik.gv.at',
  'STATcubeR': 'https://statistikat.github.io/STATcubeR',
  'Open Data Portal': 'https://data.statistik.gv.at',
  'json API request': 'https://docs.wingarc.com.au/superstar/9.10/open-data-api/use-superweb2-to-build-api-queries',
  'shiny fileInput': 'https://shiny.rstudio.com/reference/shiny/1.6.0/fileInput.html',
  'binary': 'https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/serialize',
  'httr': 'https://httr.r-lib.org/',
  'CRAN': 'https://cran.r-project.org/',
}

function setLinks() {
  document.querySelectorAll('a').forEach(link => {
    if(linkmap.hasOwnProperty(link.innerText)) {
      link.setAttribute('href', linkmap[link.innerText]);
      link.setAttribute('target', '_blank');
    }
  });
}

setTimeout(setLinks, 400)
