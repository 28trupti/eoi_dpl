/**
 * Name: Form to JSON
 * Description: Create JSON object from a form submission using jQuery
 * Version: 1.0.0
 * Author: Shrikumar Infotech
 * Author URI: dev@shrikumarinfotech.com
 * License: MIT
 * Lincense URI: https://opensource.org/licenses/MIT
 */

'use strict';
console.log("hello world")
jQuery(function ($) {
    // plugin function
    $.fn.formToJson = function (resultContainer) {
        // console.log('this is from plugin');

        // define form
        const form = this;
        // define display target from parameter
        // if(resultContainer != undefined){
        //     const displayResultTarget = resultContainer;
        // }
        // console.log(resultContainer);

        // define submitted data
        let submittedData = [];

        // define form data structure
        let formData = {
            id: Number,
            ratingagencyname: String,
            creaditratings: String,
            bankname: String,
            bankfacilities: Number,
            limit: String,
            locationname: String,
            locspocname: String,
            tecnameofloc: String,
            tecspocname: String,
            salesteamdetails: String,
            salesdesignation: String,
            salesdexpe: String,
            marketpername: String,
            marketdesignation: String,
            marketexp: String,
            marketpersonname: String,
            accpersonmame: String,
            accprodmame: String,
            accexp: String,
            custservice: String,
            tankersownedno: String,
            newradio1: String,
            connotankers: String,
            concapacitykl: String,
            conduracontact: String,
            averageage: String,
            peroftankers: String,
            avgoftankers: String,
            accesstoss: String,
            accesstank: String,
            tankerlocation: String,
            tankerprodname: String,
            tankercapacity: String,
            accessdrumming: String,
            locdrumming: String,
            ownedthird: String,
            wareavailable: String,
            warehoselocation: String,
            warehosearea: String,
            warehoseownedthird: String,
            willshare: String,
            willname: String,
            willdoor: String,
            avaiIT: String,
            availITname: String,
            availyears: String,
            annualtarget1: String,
            commissionexpected1: String,
            credittearms1: String,
            annualtarget2: String,
            commissionexpected2: String,
            credittearms2: String,
            annualtarget3: String,
            commissionexpected3: String,
            credittearms3: String,
            annualtarget4: String,
            commissionexpected4: String,
            credittearms4: String,
            willwork: String,
            targetsales: String,
            targetprodname: String,
            targetannual: String

        };
        // define json data for output
        let jsonOutputData = Object.create(formData);

        // form submission function
        $(form).submit(function (event) {
            event.preventDefault();

            // console.log($(form).serialize());
            // run sort data function
            sortData($(form).serialize());

            // run json data function
            jsonData();

            // display json data
            outputData();

            // reset data
            resetData();

        });

        // sort data function
        function sortData(data) {
            // sanity check
            if (data != undefined) {
                // regular expessions
                const regxSpace = /(?:%20)/gi;
                const regxEmail = /(?:%40)/gi;
                const regxLineBreak = /(?:%0D%0A)/gi;
                // save data by replacing with regx and split with '&' as parts
                let sortedData = data.replace(regxSpace, ' ').replace(regxEmail, '@').replace(regxLineBreak, '\n').split('&');
                // iterate through sortedData and save as array into submittedData
                $(sortedData).each(function (index, element) {
                    submittedData.push(element.split('='));
                });

                // console.log(submittedData);
            }
        };

        // json data function
        function jsonData() {
            // sanity check
            if (submittedData != undefined || submittedData != null) {
                // create JSON data
                $(submittedData).promise().done(function () {
                    // save json data

                    ratingagencyname: String,
                        jsonOutputData.id = Math.random();
                    jsonOutputData.ratingagencyname = submittedData[0][1];
                    jsonOutputData.creaditratings = submittedData[1][1];
                    jsonOutputData.bankname = submittedData[2][1];
                    jsonOutputData.bankfacilities = submittedData[3][1];
                    jsonOutputData.limit = submittedData[4][1];
                    jsonOutputData.locationname = submittedData[5][1];
                    jsonOutputData.locspocname = submittedData[6][1],
                        jsonOutputData.tecnameofloc = submittedData[7][1],
                        jsonOutputData.salesteamdetails = submittedData[8][1],
                        jsonOutputData.tecspocname = submittedData[9][1],
                        jsonOutputData.salesdesignation = submittedData[10][1],
                        jsonOutputData.salesdexpe = submittedData[11][1],
                        jsonOutputData.marketpername = submittedData[12][1],
                        jsonOutputData.marketdesignation = submittedData[13][1],
                        jsonOutputData.marketexp = submittedData[14][1],
                        jsonOutputData.marketpersonname = submittedData[15][1],
                        jsonOutputData.accpersonmame = submittedData[16][1],
                        jsonOutputData.accprodmame = submittedData[17][1],
                        jsonOutputData.accexp = submittedData[18][1],
                        jsonOutputData.custservice = submittedData[19][1],
                        jsonOutputData.tankersownedno = submittedData[20][1],
                        jsonOutputData.newradio1 = submittedData[21][1],
                        jsonOutputData.connotankers = submittedData[22][1],
                        jsonOutputData.concapacitykl = submittedData[23][1],
                        jsonOutputData.conduracontact = submittedData[24][1],
                        jsonOutputData.averageage = submittedData[25][1],
                        jsonOutputData.peroftankers = submittedData[26][1],
                        jsonOutputData.avgoftankers = submittedData[27][1],
                        jsonOutputData.accesstoss = submittedData[28][1],
                        jsonOutputData.accesstank = submittedData[29][1],
                        jsonOutputData.tankerlocation = submittedData[30][1],
                        jsonOutputData.tankerprodname = submittedData[31][1],
                        jsonOutputData.tankercapacity = submittedData[32][1],
                        jsonOutputData.accessdrumming = submittedData[33][1],
                        jsonOutputData.locdrumming = submittedData[34][1],
                        jsonOutputData.ownedthird = submittedData[35][1],
                        jsonOutputData.wareavailable = submittedData[36][1],
                        jsonOutputData.warehoselocation = submittedData[37][1],
                        jsonOutputData.warehosearea = submittedData[38][1],
                        jsonOutputData.warehoseownedthird = submittedData[39][1],
                        jsonOutputData.willshare = submittedData[40][1],
                        jsonOutputData.willname = submittedData[41][1],
                        jsonOutputData.willdoor = submittedData[42][1],
                        jsonOutputData.avaiIT = submittedData[43][1],
                        jsonOutputData.availITname = submittedData[44][1],
                        jsonOutputData.availyears = submittedData[45][1],
                        jsonOutputData.annualtarget1 = submittedData[46][1],
                        jsonOutputData.commissionexpected1 = submittedData[47][1],
                        jsonOutputData.credittearms1 = submittedData[48][1],
                        jsonOutputData.annualtarget2 = submittedData[49][1],
                        jsonOutputData.commissionexpected2 = submittedData[50][1],
                        jsonOutputData.credittearms2 = submittedData[51][1],
                        jsonOutputData.annualtarget3 = submittedData[52][1],
                        jsonOutputData.commissionexpected3 = submittedData[53][1],
                        jsonOutputData.credittearms3 = submittedData[54][1],
                        jsonOutputData.annualtarget4 = submittedData[55][1],
                        jsonOutputData.commissionexpected4 = submittedData[56][1],
                        jsonOutputData.credittearms4 = submittedData[57][1],
                        jsonOutputData.willwork = submittedData[58][1],
                        jsonOutputData.targetsales = submittedData[59][1],
                        jsonOutputData.targetprodname = submittedData[60][1],
                        jsonOutputData.targetannual = submittedData[61][1],
                        jsonOutputData.createdDate = Date.now()
                });
            }
        };

        // output data
        function outputData() {
            // stingify jsonOutputData for output
            let stringifyJsonData = JSON.stringify(jsonOutputData);

            // check if output target is provided
            if (resultContainer !== undefined || resultContainer !== null) {
                $(jsonOutputData).promise().done(function () {
                    $(resultContainer).html(stringifyJsonData);
                    // return stringifyJsonData;
                    console.log(stringifyJsonData); // log the JSON data
                });
            }
            else {
                // else just return the JSON data
                console.log('resultContainer undefined');
                return stringifyJsonData;
            }
        }

        // reset data
        function resetData() {
            // reset all data
            submittedData = [];
            jsonOutputData = {};
        }

    }
}(jQuery));