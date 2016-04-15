# Interactive Map App

#### Interactive map using HTML, CSS, JavaScript, AngularJS, and DataMaps (http://datamaps.github.io/)

## Team members and contributions

### Jonathan Melin
+ Initiated idea and vision
+ Designed layout
+ Implemented and customized DataMaps features (coloring, popups, etc.)
+ Structured initial AngularJS components

### Keith
+ Slept

### Patrick
+ Watched YouTube videos

### Tristan
+ Put out house fire

## Summary

#### Single page Angular app that allows user to filter search based on language, population, and GDP data, with each specific map having its own URL. 

## Demo

[Live Demo]: http://students.digitalcrafts.com/backTableBankers

## Screenshots

Home page:
![alt text]()

Language search:
![alt text]()

Language and population search:
![alt text]()

Language, population, and GDP search:
![alt text]()

Custom popup data:
![alt text]()
![alt text]()

Responsive design:
![alt text]()
![alt text]()

##Code examples

HTML for search box:
```
<div id="search-panel" ng-controller="filterController">
    <select id="language-option" ng-change="doFilter('one')" ng-model="newOption" ng-options="language for language in languages">
        <option value="">Choose a language</option>
    </select>
    <select id="population-option" ng-change="doFilter('two')" ng-model="newOption" ng-options="myPop.label for myPop in popRanges">
        <option value="">Choose a population size</option>
    </select>
    <select id="gdp-option" ng-change="doFilter('three')" ng-model="newOption" ng-options="gdp.label for gdp in gdpRanges">
        <option value="">Choose a GDP amount</option>
    </select>
    <div id="reset-map-div">
        <button ng-click="resetMap()">Reset Map</button>
    </div> 
</div>
```

##TO DO

+ Add remaining countries
+ Add languages
+ Add additional filters

