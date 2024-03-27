// Code your solution here
function findMatching(driver,string){
    return driver.filter(function(driver){
        return driver.toLowerCase()===string.toLowerCase()
    })
}

function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }
  
function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }