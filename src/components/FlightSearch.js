import React, { useState } from "react";
import "./FlightSearch.css";
import Select from "react-select";
import SingleFlightDisplay from "./SingleFlightDisplay";

const optionFlights = [
  { value: "Endeavor Air Inc. ", label: "Endeavor Air Inc. " },
  { value: "United Air Lines Inc.", label: "United Air Lines Inc." },
  { value: "Compass Airlines", label: "Compass Airlines" },
  { value: "Comair Inc.", label: "Comair Inc." },
  { value: "Southwest Airlines Co.", label: "Southwest Airlines Co." },
  { value: "ExpressJet Airlines Inc.", label: "ExpressJet Airlines Inc." },
  { value: "JetBlue Airways", label: "JetBlue Airways" },
  { value: "Empire Airlines Inc.", label: "Empire Airlines Inc." },
  { value: "Envoy Air", label: "Envoy Air" },
  {
    value: "Capital Cargo International",
    label: "Capital Cargo International",
  },
  { value: "Hawaiian Airlines Inc.", label: "Hawaiian Airlines Inc." },
  { value: "Mesa Airlines Inc.", label: "Mesa Airlines Inc." },
  { value: "American Airlines Inc.", label: "American Airlines Inc." },
  { value: "Republic Airlines", label: "Republic Airlines" },
  { value: "Spirit Air Lines", label: "Spirit Air Lines" },
  {
    value: "GoJet Airlines, LLC d/b/a United Express",
    label: "GoJet Airlines, LLC d/b/a United Express",
  },
  { value: "Allegiant Air", label: "Allegiant Air" },
  { value: "SkyWest Airlines Inc.", label: "SkyWest Airlines Inc." },
  { value: "Horizon Air", label: "Horizon Air" },
  {
    value: "Air Wisconsin Airlines Corp",
    label: "Air Wisconsin Airlines Corp",
  },
  { value: "Trans States Airlines", label: "Trans States Airlines" },
  { value: "Peninsula Airways Inc.", label: "Peninsula Airways Inc." },
  { value: "Frontier Airlines Inc.", label: "Frontier Airlines Inc." },
  {
    value: "Commutair Aka Champlain Enterprises, Inc.",
    label: "Commutair Aka Champlain Enterprises, Inc.",
  },
  { value: "Alaska Airlines Inc.", label: "Alaska Airlines Inc." },
  { value: "Delta Air Lines Inc.", label: "Delta Air Lines Inc." },
  { value: "Virgin America", label: "Virgin America" },
  { value: "Cape Air", label: "Cape Air" },
];

const optionCities = [
  { value: "COS", label: "Colorado Springs, CO" },
  { value: "SDF", label: "      Louisville, KY" },
  { value: "CLL", label: "College Station/B..." },
  { value: "CMI", label: "Champaign/Urbana, IL" },
  { value: "MSN", label: "         Madison, WI" },
  { value: "EVV", label: "      Evansville, IN" },
  { value: "RIC", label: "        Richmond, VA" },
  { value: "STX", label: "   Christiansted, VI" },
  { value: "FLO", label: "        Florence, SC" },
  { value: "DCA", label: "      Washington, DC" },
  { value: "LNY", label: "           Lanai, HI" },
  { value: "GUM", label: "            Guam, TT" },
  { value: "PGV", label: "      Greenville, NC" },
  { value: "GRI", label: "    Grand Island, NE" },
  { value: "ITO", label: "            Hilo, HI" },
  { value: "IAG", label: "   Niagara Falls, NY" },
  { value: "MSP", label: "     Minneapolis, MN" },
  { value: "HHH", label: "     Hilton Head, SC" },
  { value: "CHS", label: "      Charleston, SC" },
  { value: "AVL", label: "       Asheville, NC" },
  { value: "PIT", label: "      Pittsburgh, PA" },
  { value: "MYR", label: "    Myrtle Beach, SC" },
  { value: "DSM", label: "      Des Moines, IA" },
  { value: "SJT", label: "      San Angelo, TX" },
  { value: "SLC", label: "  Salt Lake City, UT" },
  { value: "DEN", label: "          Denver, CO" },
  { value: "SGF", label: "     Springfield, MO" },
  { value: "MDW", label: "         Chicago, IL" },
  { value: "CHO", label: " Charlottesville, VA" },
  { value: "DAY", label: "          Dayton, OH" },
  { value: "BWI", label: "       Baltimore, MD" },
  { value: "ABQ", label: "     Albuquerque, NM" },
  { value: "MHK", label: "Manhattan/Ft. Ril..." },
  { value: "SMF", label: "      Sacramento, CA" },
  { value: "SNA", label: "       Santa Ana, CA" },
  { value: "AEX", label: "      Alexandria, LA" },
  { value: "GPT", label: " Gulfport/Biloxi, MS" },
  { value: "GRB", label: "       Green Bay, WI" },
  { value: "ACT", label: "            Waco, TX" },
  { value: "MEM", label: "         Memphis, TN" },
  { value: "YUM", label: "            Yuma, AZ" },
  { value: "DTW", label: "         Detroit, MI" },
  { value: "FAR", label: "           Fargo, ND" },
  { value: "SHV", label: "      Shreveport, LA" },
  { value: "HDN", label: "          Hayden, CO" },
  { value: "BMI", label: "Bloomington/Norma..." },
  { value: "PSE", label: "           Ponce, PR" },
  { value: "ORH", label: "       Worcester, MA" },
  { value: "PWM", label: "        Portland, ME" },
  { value: "RDU", label: "  Raleigh/Durham, NC" },
  { value: "SBA", label: "   Santa Barbara, CA" },
  { value: "PIA", label: "          Peoria, IL" },
  { value: "LAX", label: "     Los Angeles, CA" },
  { value: "LYH", label: "       Lynchburg, VA" },
  { value: "JLN", label: "          Joplin, MO" },
  { value: "GRK", label: "         Killeen, TX" },
  { value: "DFW", label: "Dallas/Fort Worth..." },
  { value: "ORF", label: "         Norfolk, VA" },
  { value: "EUG", label: "          Eugene, OR" },
  { value: "ANC", label: "       Anchorage, AK" },
  { value: "SYR", label: "        Syracuse, NY" },
  { value: "EGE", label: "           Eagle, CO" },
  { value: "FAI", label: "       Fairbanks, AK" },
  { value: "IND", label: "    Indianapolis, IN" },
  { value: "AUS", label: "          Austin, TX" },
  { value: "MHT", label: "      Manchester, NH" },
  { value: "XNA", label: "    Fayetteville, AR" },
  { value: "GGG", label: "        Longview, TX" },
  { value: "RNO", label: "            Reno, NV" },
  { value: "ELP", label: "         El Paso, TX" },
  { value: "MKK", label: "        Hoolehua, HI" },
  { value: "DRO", label: "         Durango, CO" },
  { value: "HNL", label: "        Honolulu, HI" },
  { value: "ISP", label: "           Islip, NY" },
  { value: "MFE", label: "Mission/McAllen/E..." },
  { value: "SWO", label: "      Stillwater, OK" },
  { value: "ART", label: "       Watertown, NY" },
  { value: "GEG", label: "         Spokane, WA" },
  { value: "RSW", label: "      Fort Myers, FL" },
  { value: "STL", label: "       St. Louis, MO" },
  { value: "ABE", label: "Allentown/Bethleh..." },
  { value: "MCO", label: "         Orlando, FL" },
  { value: "LIH", label: "           Lihue, HI" },
  { value: "BOI", label: "           Boise, ID" },
  { value: "AMA", label: "        Amarillo, TX" },
  { value: "TPA", label: "           Tampa, FL" },
  { value: "ALO", label: "        Waterloo, IA" },
  { value: "SPN", label: "          Saipan, TT" },
  { value: "COU", label: "        Columbia, MO" },
  { value: "CSG", label: "        Columbus, GA" },
  { value: "RDM", label: "    Bend/Redmond, OR" },
  { value: "TUL", label: "           Tulsa, OK" },
  { value: "MLB", label: "       Melbourne, FL" },
  { value: "OKC", label: "   Oklahoma City, OK" },
  { value: "DAB", label: "   Daytona Beach, FL" },
  { value: "DBQ", label: "         Dubuque, IA" },
  { value: "RAP", label: "      Rapid City, SD" },
  { value: "HOU", label: "         Houston, TX" },
  { value: "OMA", label: "           Omaha, NE" },
  { value: "BGR", label: "          Bangor, ME" },
  { value: "IAD", label: "      Washington, DC" },
  { value: "SJC", label: "        San Jose, CA" },
  { value: "ATL", label: "         Atlanta, GA" },
  { value: "CAK", label: "           Akron, OH" },
  { value: "LGB", label: "      Long Beach, CA" },
  { value: "CWA", label: "         Mosinee, WI" },
  { value: "RST", label: "       Rochester, MN" },
  { value: "PPG", label: "       Pago Pago, TT" },
  { value: "LGA", label: "        New York, NY" },
  { value: "CHA", label: "     Chattanooga, TN" },
  { value: "VPS", label: "      Valparaiso, FL" },
  { value: "JFK", label: "        New York, NY" },
  { value: "BIS", label: " Bismarck/Mandan, ND" },
  { value: "SFO", label: "   San Francisco, CA" },
  { value: "GUC", label: "        Gunnison, CO" },
  { value: "BRO", label: "     Brownsville, TX" },
  { value: "MSY", label: "     New Orleans, LA" },
  { value: "SBY", label: "       Salisbury, MD" },
  { value: "CRW", label: "Charleston/Dunbar..." },
  { value: "SPI", label: "     Springfield, IL" },
  { value: "SUX", label: "      Sioux City, IA" },
  { value: "BFL", label: "     Bakersfield, CA" },
  { value: "GSO", label: "Greensboro/High P..." },
  { value: "HPN", label: "    White Plains, NY" },
  { value: "ROC", label: "       Rochester, NY" },
  { value: "MDT", label: "      Harrisburg, PA" },
  { value: "SAN", label: "       San Diego, CA" },
  { value: "FLG", label: "       Flagstaff, AZ" },
  { value: "CLE", label: "       Cleveland, OH" },
  { value: "MGM", label: "      Montgomery, AL" },
  { value: "AZO", label: "       Kalamazoo, MI" },
  { value: "BDL", label: "        Hartford, CT" },
  { value: "LAW", label: "Lawton/Fort Sill, OK" },
  { value: "JAC", label: "         Jackson, WY" },
  { value: "SRQ", label: "Sarasota/Bradento..." },
  { value: "IPT", label: "    Williamsport, PA" },
  { value: "ORD", label: "         Chicago, IL" },
  { value: "LCH", label: "    Lake Charles, LA" },
  { value: "BZN", label: "         Bozeman, MT" },
  { value: "FSM", label: "      Fort Smith, AR" },
  { value: "SJU", label: "        San Juan, PR" },
  { value: "STT", label: "Charlotte Amalie, VI" },
  { value: "CAE", label: "        Columbia, SC" },
  { value: "OAJ", label: "Jacksonville/Camp..." },
  { value: "DRT", label: "         Del Rio, TX" },
  { value: "GCK", label: "     Garden City, KS" },
  { value: "HSV", label: "      Huntsville, AL" },
  { value: "HOB", label: "           Hobbs, NM" },
  { value: "LAN", label: "         Lansing, MI" },
  { value: "PHL", label: "    Philadelphia, PA" },
  { value: "MKE", label: "       Milwaukee, WI" },
  { value: "MCI", label: "     Kansas City, MO" },
  { value: "SAV", label: "        Savannah, GA" },
  { value: "PBG", label: "     Plattsburgh, NY" },
  { value: "DAL", label: "          Dallas, TX" },
  { value: "FSD", label: "     Sioux Falls, SD" },
  { value: "LBE", label: "         Latrobe, PA" },
  { value: "LSE", label: "       La Crosse, WI" },
  { value: "LBB", label: "         Lubbock, TX" },
  { value: "BPT", label: "Beaumont/Port Art..." },
  { value: "TVC", label: "   Traverse City, MI" },
  { value: "ERI", label: "            Erie, PA" },
  { value: "MFR", label: "         Medford, OR" },
  { value: "PVD", label: "      Providence, RI" },
  { value: "MRY", label: "        Monterey, CA" },
  { value: "ILM", label: "      Wilmington, NC" },
  { value: "CVG", label: "      Cincinnati, OH" },
  { value: "LEX", label: "       Lexington, KY" },
  { value: "SBN", label: "      South Bend, IN" },
  { value: "ALB", label: "          Albany, NY" },
  { value: "PHX", label: "         Phoenix, AZ" },
  { value: "ICT", label: "         Wichita, KS" },
  { value: "GNV", label: "     Gainesville, FL" },
  { value: "CLT", label: "       Charlotte, NC" },
  { value: "TYR", label: "           Tyler, TX" },
  { value: "GSP", label: "           Greer, SC" },
  { value: "BOS", label: "          Boston, MA" },
  { value: "PHF", label: "Newport News/Will..." },
  { value: "BIL", label: "        Billings, MT" },
  { value: "CID", label: "Cedar Rapids/Iowa..." },
  { value: "BNA", label: "       Nashville, TN" },
  { value: "GJT", label: "  Grand Junction, CO" },
  { value: "HTS", label: "         Ashland, WV" },
  { value: "MTJ", label: "  Montrose/Delta, CO" },
  { value: "SBP", label: " San Luis Obispo, CA" },
  { value: "MOB", label: "          Mobile, AL" },
  { value: "AGS", label: "         Augusta, GA" },
  { value: "PBI", label: "West Palm Beach/P..." },
  { value: "IAH", label: "         Houston, TX" },
  { value: "MQT", label: "       Marquette, MI" },
  { value: "LFT", label: "       Lafayette, LA" },
  { value: "FWA", label: "      Fort Wayne, IN" },
  { value: "LIT", label: "     Little Rock, AR" },
  { value: "OGG", label: "         Kahului, HI" },
  { value: "ACY", label: "   Atlantic City, NJ" },
  { value: "ECP", label: "     Panama City, FL" },
  { value: "SEA", label: "         Seattle, WA" },
  { value: "BQN", label: "       Aguadilla, PR" },
  { value: "JHM", label: "         Kapalua, HI" },
  { value: "GRR", label: "    Grand Rapids, MI" },
  { value: "HRL", label: "Harlingen/San Ben..." },
  { value: "EYW", label: "        Key West, FL" },
  { value: "CMH", label: "        Columbus, OH" },
  { value: "FLL", label: " Fort Lauderdale, FL" },
  { value: "PDX", label: "        Portland, OR" },
  { value: "LNK", label: "         Lincoln, NE" },
  { value: "TUS", label: "          Tucson, AZ" },
  { value: "BUF", label: "         Buffalo, NY" },
  { value: "ONT", label: "         Ontario, CA" },
  { value: "AVP", label: "Scranton/Wilkes-B..." },
  { value: "MLI", label: "          Moline, IL" },
  { value: "TLH", label: "     Tallahassee, FL" },
  { value: "MBS", label: "Saginaw/Bay City/..." },
  { value: "ABI", label: "         Abilene, TX" },
  { value: "BTR", label: "     Baton Rouge, LA" },
  { value: "JAN", label: "Jackson/Vicksburg..." },
  { value: "LRD", label: "          Laredo, TX" },
  { value: "PNS", label: "       Pensacola, FL" },
  { value: "ATW", label: "        Appleton, WI" },
  { value: "PSP", label: "    Palm Springs, CA" },
  { value: "TRI", label: "Bristol/Johnson C..." },
  { value: "TXK", label: "       Texarkana, AR" },
  { value: "MSO", label: "        Missoula, MT" },
  { value: "MIA", label: "           Miami, FL" },
  { value: "KOA", label: "            Kona, HI" },
  { value: "HVN", label: "       New Haven, CT" },
  { value: "ROA", label: "         Roanoke, VA" },
  { value: "SPS", label: "   Wichita Falls, TX" },
  { value: "BUR", label: "         Burbank, CA" },
  { value: "DLH", label: "          Duluth, MN" },
  { value: "BTV", label: "      Burlington, VT" },
  { value: "FAT", label: "          Fresno, CA" },
  { value: "TOL", label: "          Toledo, OH" },
  { value: "EWR", label: "          Newark, NJ" },
  { value: "OAK", label: "         Oakland, CA" },
  { value: "JAX", label: "    Jacksonville, FL" },
  { value: "MLU", label: "          Monroe, LA" },
  { value: "FAY", label: "    Fayetteville, NC" },
  { value: "CRP", label: "  Corpus Christi, TX" },
  { value: "FNT", label: "           Flint, MI" },
  { value: "STS", label: "      Santa Rosa, CA" },
  { value: "BHM", label: "      Birmingham, AL" },
  { value: "ITH", label: " Ithaca/Cortland, NY" },
  { value: "MAF", label: "  Midland/Odessa, TX" },
  { value: "SAT", label: "     San Antonio, TX" },
  { value: "EWN", label: "New Bern/Morehead..." },
  { value: "LAS", label: "       Las Vegas, NV" },
  { value: "SCE", label: "   State College, PA" },
  { value: "SWF", label: "Newburgh/Poughkee..." },
  { value: "TYS", label: "       Knoxville, TN" },
  { value: "PIR", label: "          Pierre, SD" },
  { value: "GTR", label: "        Columbus, MS" },
  { value: "CKB", label: "Clarksburg/Fairmo..." },
  { value: "DVL", label: "     Devils Lake, ND" },
  { value: "CYS", label: "        Cheyenne, WY" },
  { value: "OGD", label: "           Ogden, UT" },
  { value: "COD", label: "            Cody, WY" },
  { value: "INL", label: "International Fal..." },
  { value: "PVU", label: "           Provo, UT" },
  { value: "BTM", label: "           Butte, MT" },
  { value: "OME", label: "            Nome, AK" },
  { value: "HLN", label: "          Helena, MT" },
  { value: "ADK", label: "     Adak Island, AK" },
  { value: "SCK", label: "        Stockton, CA" },
  { value: "BJI", label: "         Bemidji, MN" },
  { value: "EKO", label: "            Elko, NV" },
  { value: "RHI", label: "     Rhinelander, WI" },
  { value: "CNY", label: "            Moab, UT" },
  { value: "KTN", label: "       Ketchikan, AK" },
  { value: "ABR", label: "        Aberdeen, SD" },
  { value: "LBF", label: "    North Platte, NE" },
  { value: "PUB", label: "          Pueblo, CO" },
  { value: "SFB", label: "         Sanford, FL" },
  { value: "SMX", label: "     Santa Maria, CA" },
  { value: "PLN", label: "        Pellston, MI" },
  { value: "OWB", label: "       Owensboro, KY" },
  { value: "PUW", label: "         Pullman, WA" },
  { value: "OGS", label: "      Ogdensburg, NY" },
  { value: "BGM", label: "      Binghamton, NY" },
  { value: "GCC", label: "        Gillette, WY" },
  { value: "CMX", label: "Hancock/Houghton, MI" },
  { value: "PIB", label: "Hattiesburg/Laure..." },
  { value: "BLV", label: "      Belleville, IL" },
  { value: "ACV", label: "   Arcata/Eureka, CA" },
  { value: "IMT", label: "Iron Mountain/Kin..." },
  { value: "ASE", label: "           Aspen, CO" },
  { value: "UIN", label: "          Quincy, IL" },
  { value: "LAR", label: "         Laramie, WY" },
  { value: "LWS", label: "        Lewiston, ID" },
  { value: "BRW", label: "          Barrow, AK" },
  { value: "YKM", label: "          Yakima, WA" },
  { value: "RKS", label: "    Rock Springs, WY" },
  { value: "VLD", label: "        Valdosta, GA" },
  { value: "PQI", label: "Presque Isle/Houl..." },
  { value: "LBL", label: "         Liberal, KS" },
  { value: "TWF", label: "      Twin Falls, ID" },
  { value: "TTN", label: "         Trenton, NJ" },
  { value: "OTZ", label: "        Kotzebue, AK" },
  { value: "MEI", label: "        Meridian, MS" },
  { value: "EAR", label: "         Kearney, NE" },
  { value: "SIT", label: "           Sitka, AK" },
  { value: "LCK", label: "        Columbus, OH" },
  { value: "ROW", label: "         Roswell, NM" },
  { value: "BQK", label: "       Brunswick, GA" },
  { value: "APN", label: "          Alpena, MI" },
  { value: "ALW", label: "     Walla Walla, WA" },
  { value: "HGR", label: "      Hagerstown, MD" },
  { value: "USA", label: "         CONCORD, NC" },
  { value: "SUN", label: "Sun Valley/Hailey..." },
  { value: "PAH", label: "         Paducah, KY" },
  { value: "BFF", label: "     Scottsbluff, NE" },
  { value: "ABY", label: "          Albany, GA" },
  { value: "BLI", label: "      Bellingham, WA" },
  { value: "PIE", label: "  St. Petersburg, FL" },
  { value: "PRC", label: "        Prescott, AZ" },
  { value: "CGI", label: "  Cape Girardeau, MO" },
  { value: "HIB", label: "         Hibbing, MN" },
  { value: "AZA", label: "         Phoenix, AZ" },
  { value: "ADQ", label: "          Kodiak, AK" },
  { value: "ATY", label: "       Watertown, SD" },
  { value: "MKG", label: "        Muskegon, MI" },
  { value: "MOT", label: "           Minot, ND" },
  { value: "WRG", label: "        Wrangell, AK" },
  { value: "PAE", label: "         Everett, WA" },
  { value: "DUT", label: "        Unalaska, AK" },
  { value: "RDD", label: "         Redding, CA" },
  { value: "VEL", label: "          Vernal, UT" },
  { value: "JMS", label: "       Jamestown, ND" },
  { value: "OTH", label: "North Bend/Coos B..." },
  { value: "CDV", label: "         Cordova, AK" },
  { value: "SLN", label: "          Salina, KS" },
  { value: "CDC", label: "      Cedar City, UT" },
  { value: "GFK", label: "     Grand Forks, ND" },
  { value: "PSC", label: "Pasco/Kennewick/R..." },
  { value: "ESC", label: "        Escanaba, MI" },
  { value: "BKG", label: "         Branson, MO" },
  { value: "RFD", label: "        Rockford, IL" },
  { value: "SGU", label: "      St. George, UT" },
  { value: "IDA", label: "     Idaho Falls, ID" },
  { value: "EAT", label: "       Wenatchee, WA" },
  { value: "CIU", label: "Sault Ste. Marie, MI" },
  { value: "DHN", label: "          Dothan, AL" },
  { value: "EAU", label: "      Eau Claire, WI" },
  { value: "MMH", label: "   Mammoth Lakes, CA" },
  { value: "HYS", label: "            Hays, KS" },
  { value: "STC", label: "       St. Cloud, MN" },
  { value: "SAF", label: "        Santa Fe, NM" },
  { value: "LWB", label: "       Lewisburg, WV" },
  { value: "ISN", label: "       Williston, ND" },
  { value: "FCA", label: "       Kalispell, MT" },
  { value: "BET", label: "          Bethel, AK" },
  { value: "DIK", label: "       Dickinson, ND" },
  { value: "GTF", label: "     Great Falls, MT" },
  { value: "PSG", label: "      Petersburg, AK" },
  { value: "PSM", label: "      Portsmouth, NH" },
  { value: "SCC", label: "       Deadhorse, AK" },
  { value: "PIH", label: "       Pocatello, ID" },
  { value: "JNU", label: "          Juneau, AK" },
  { value: "SHD", label: "        Staunton, VA" },
  { value: "BRD", label: "        Brainerd, MN" },
  { value: "ELM", label: "  Elmira/Corning, NY" },
  { value: "CPR", label: "          Casper, WY" },
  { value: "PGD", label: "     Punta Gorda, FL" },
  { value: "YAK", label: "         Yakutat, AK" },
  { value: "MVY", label: "Martha's Vineyard..." },
  { value: "ACK", label: "       Nantucket, MA" },
  { value: "GST", label: "        Gustavus, AK" },
  { value: "BFM", label: "          Mobile, AL" },
  { value: "WYS", label: "West Yellowstone, MT" },
  { value: "HYA", label: "         Hyannis, MA" },
  { value: "DLG", label: "      Dillingham, AK" },
  { value: "AKN", label: "     King Salmon, AK" },
  { value: "XWA", label: "       Williston, ND" },
  { value: "USA", label: "         Concord, NC" },
  { value: "YNG", label: "Youngstown/Warren..." },
  { value: "ROP", label: "            Rota, TT" },
  { value: "ILG", label: "      Wilmington, DE" },
  { value: "FOD", label: "      Fort Dodge, IA" },
  { value: "ALS", label: "         Alamosa, CO" },
  { value: "SHR", label: "        Sheridan, WY" },
  { value: "VCT", label: "        Victoria, TX" },
  { value: "MCW", label: "      Mason City, IA" },
  { value: "TBN", label: "Fort Leonard Wood..." },
  { value: "DEC", label: "         Decatur, IL" },
  { value: "DDC", label: "      Dodge City, KS" },
  { value: "RIW", label: " Riverton/Lander, WY" },
  { value: "JST", label: "       Johnstown, PA" },
  { value: "BIH", label: "          Bishop, CA" },
  { value: "CDB", label: "        Cold Bay, AK" },
];


function SearchBar() {
  const [airline, setAirline] = useState({});
  const [departureLocation, setDepartureLocation] = useState({});
  const [arrivalLocation, setArrivalLocation] = useState({});
  const [date, setDate] = useState();

  function handleSubmit(event) {
    console.log(airline.value);
    console.log(departureLocation.value);
    console.log(arrivalLocation.value);
    console.log(date.substring(0,4)); //year
    console.log(date.substring(5,7)); //month
    console.log(date.substring(8,10)); //day

    const newData = [{
      "Airline" : 1,
      "Origin": 1,
      "Dest" : 1,
      "DayofMonth" : 1,
      "Month" : 1,
      "Year": 1,
      "DepTime": 123,
      "ArrTime": 6969,
      "ActualElapsedTime": 88888,
      "DepDel15": 1,
      "ArrDel15": 9
    },{
      "Airline" : 1,
      "Origin": 1,
      "Dest" : 1,
      "DayofMonth" : 1,
      "Month" : 1,
      "Year": 1,
      "DepTime": 123,
      "ArrTime": 6969,
      "ActualElapsedTime": 88888,
      "DepDel15": 1,
      "ArrDel15": 9
    }];

    console.log(newData);

    /*
    newData = await fetch("./api", {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Airline: airline.value,
        Origin: departureLocation.value,
        Dest: arrivalLocation.value,
        DayofMonth: date.substring(0,4),
        Month: date.substring(5,7),
        Year: date.substring(8,10)
      })
      .then(res => res.json())
    })
    */

    //newNewData = newData;

    //console.log(newNewData);

    //console.log(newData);

    event.preventDefault();
  }

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit} >
        <div className="SurveyFont">
          <div>
            <label>Select Airline</label>
            <Select
              isSearchable={true}
              isClearable={true}
              placeholder={"Airline Name"}
              options={optionFlights}
              onChange={setAirline}
            ></Select>
          </div>

          <div>
            <label>Select Departure Location</label>
            <Select
              isSearchable={true}
              isClearable={true}
              placeholder={"Departure City"}
              options={optionCities}
              onChange={setDepartureLocation}
            ></Select>
          </div>

          <div>
            <label>Select Arrival Location</label>
            <Select
              isSearchable={true}
              isClearable={true}
              placeholder={"Arrival City"}
              options={optionCities}
              onChange={setArrivalLocation}
            ></Select>
          </div>

          <div>
            <label> Select Departure Date</label>
            <div>
              <input type="date" onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>

          <div className="SubmitButton">
            <input type="submit" value="Search Flights"></input>
          </div>

          <SingleFlightDisplay data={[]}></SingleFlightDisplay>
        </div>
      </form>
      
    </div>
  );
}

export default SearchBar;
