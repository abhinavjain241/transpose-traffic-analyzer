// Adding 500 Data Points
var map, pointarray, heatmap;

var TrafficData = [
new google.maps.LatLng(28.631009 ,77.218600),
new google.maps.LatLng(28.539235 ,77.218600),
new google.maps.LatLng(28.426832 ,77.114673),

new google.maps.LatLng(28.590971 ,77.227912),

new google.maps.LatLng(28.631224 ,77.278345),


new google.maps.LatLng(28.631702 ,77.188258),




new google.maps.LatLng(28.594822 ,77.206199),


new google.maps.LatLng(28.673629 ,77.283545),
new google.maps.LatLng(28.598164 ,77.188566),
new google.maps.LatLng(28.660256 ,77.227436),





new google.maps.LatLng(28.575714 ,77.199007),
new google.maps.LatLng(28.620542 ,77.217875),





new google.maps.LatLng(28.625726 ,77.241064),



new google.maps.LatLng(28.667094 ,77.216534),
new google.maps.LatLng(28.535480 ,77.257651),






new google.maps.LatLng(28.641627 ,77.295375),



new google.maps.LatLng(28.547543 ,77.323436),

new google.maps.LatLng(28.667731 ,77.179717),




new google.maps.LatLng(28.636704 ,77.286937),

new google.maps.LatLng(28.653002 ,77.192363),
new google.maps.LatLng(19.461060 ,72.814260),

new google.maps.LatLng(28.567171 ,77.208365),




new google.maps.LatLng(28.593962 ,77.223507),





new google.maps.LatLng(28.687908 ,77.221736),
new google.maps.LatLng(28.632596 ,77.241063),
new google.maps.LatLng(28.649704 ,77.191111),













new google.maps.LatLng(28.675446 ,77.300985),
new google.maps.LatLng(28.710929 ,77.396096),

new google.maps.LatLng(28.635235 ,77.185974),

new google.maps.LatLng(28.691734 ,77.140249),
new google.maps.LatLng(28.578221 ,77.212624),
new google.maps.LatLng(28.550331 ,77.250189),
new google.maps.LatLng(28.658842 ,77.221115),
new google.maps.LatLng(28.650409 ,77.144427),






new google.maps.LatLng(28.675799 ,77.312419),




new google.maps.LatLng(28.535902 ,77.392013),
new google.maps.LatLng(28.653002 ,77.192363),






new google.maps.LatLng(28.650594 ,77.230328),

new google.maps.LatLng(28.607158 ,77.251229),


new google.maps.LatLng(28.556162 ,77.099958),


new google.maps.LatLng(28.632459 ,77.208521),



new google.maps.LatLng(28.683092 ,77.021587),


new google.maps.LatLng(28.730580 ,77.775882),







new google.maps.LatLng(28.623266 ,77.283354),




new google.maps.LatLng(28.644357 ,77.199825),


new google.maps.LatLng(28.577416 ,77.278419),
new google.maps.LatLng(28.482646 ,77.106963),

new google.maps.LatLng(28.670769 ,77.399905),


new google.maps.LatLng(28.650218 ,77.302706),




new google.maps.LatLng(28.582103 ,77.248525),







new google.maps.LatLng(28.535438 ,77.263933),













new google.maps.LatLng(28.511157 ,77.336280),










new google.maps.LatLng(28.634162 ,77.200494),


new google.maps.LatLng(28.643895 ,77.112830),



new google.maps.LatLng(28.522336 ,77.284897),






new google.maps.LatLng(28.696653 ,77.205755),

new google.maps.LatLng(28.527958 ,77.289785),

new google.maps.LatLng(28.549449 ,77.200137),











new google.maps.LatLng(28.647391 ,77.166903),







new google.maps.LatLng(28.541842 ,77.239397),

new google.maps.LatLng(28.620053 ,77.236410),

new google.maps.LatLng(28.650273 ,77.217496),

new google.maps.LatLng(28.663043 ,77.227582),

new google.maps.LatLng(28.513019 ,77.186477),
new google.maps.LatLng(28.606579 ,77.217119),
new google.maps.LatLng(28.575828 ,77.252729),
new google.maps.LatLng(28.644847 ,77.240377),


new google.maps.LatLng(28.657870 ,77.142674),


new google.maps.LatLng(28.546232 ,77.296361),






new google.maps.LatLng(28.684409 ,77.315220),




new google.maps.LatLng(28.668658 ,77.230097),
new google.maps.LatLng(28.641529 ,77.120914),


new google.maps.LatLng(28.631451 ,77.216667),



new google.maps.LatLng(28.568839 ,77.220722),



new google.maps.LatLng(28.613939 ,77.209021),











new google.maps.LatLng(28.656368 ,77.221474),

new google.maps.LatLng(28.642456 ,77.178082),



new google.maps.LatLng(28.537632 ,77.228286),


new google.maps.LatLng(28.566008 ,77.176744),

new google.maps.LatLng(28.659172 ,77.235845),

new google.maps.LatLng(28.610940 ,77.234482),





new google.maps.LatLng(28.595699 ,77.207694),


new google.maps.LatLng(28.654435 ,77.168880),



new google.maps.LatLng(28.670459 ,77.282897),

new google.maps.LatLng(28.682724 ,77.164603),





new google.maps.LatLng(28.479124 ,77.070387),







new google.maps.LatLng(28.674181 ,77.214870),


new google.maps.LatLng(28.637235 ,77.182364),


new google.maps.LatLng(28.567695 ,77.243272),
new google.maps.LatLng(28.668667 ,77.101940),
new google.maps.LatLng(28.460633 ,77.048564),

new google.maps.LatLng(28.623281 ,77.214478),





new google.maps.LatLng(28.461206 ,77.052657),
new google.maps.LatLng(19.077430 ,72.880347),





new google.maps.LatLng(28.638347 ,77.129412),
new google.maps.LatLng(28.649407 ,77.226324),

new google.maps.LatLng(28.654348 ,77.153822),


new google.maps.LatLng(28.571873 ,77.258901),




new google.maps.LatLng(28.582607 ,77.143483),










new google.maps.LatLng(28.632590 ,77.215456),










new google.maps.LatLng(28.651274 ,77.251605),
new google.maps.LatLng(28.714452 ,77.166760),

new google.maps.LatLng(28.632903 ,77.219678),




new google.maps.LatLng(28.573114 ,77.160380),
new google.maps.LatLng(28.656618 ,77.222235),





new google.maps.LatLng(28.571498 ,77.264026),
new google.maps.LatLng(28.588955 ,77.315938),




new google.maps.LatLng(28.651162 ,77.234129),
new google.maps.LatLng(28.628150 ,77.245692),
new google.maps.LatLng(28.519676 ,77.294522),
new google.maps.LatLng(19.065819 ,72.889993),

new google.maps.LatLng(28.636736 ,77.274807),

new google.maps.LatLng(28.549451 ,77.259104),
new google.maps.LatLng(28.482646 ,77.106963),



new google.maps.LatLng(28.691734 ,77.140249),

new google.maps.LatLng(28.633125 ,77.086575),

new google.maps.LatLng(28.656193 ,77.240982),
new google.maps.LatLng(28.697962 ,77.140517),

new google.maps.LatLng(28.570857 ,77.313776),
new google.maps.LatLng(28.582005 ,77.171684),


new google.maps.LatLng(28.667607 ,77.167578),










new google.maps.LatLng(28.634181 ,77.089001),
new google.maps.LatLng(28.583795 ,77.294742),
new google.maps.LatLng(28.716413 ,77.154585),



new google.maps.LatLng(28.661236 ,77.231175),

new google.maps.LatLng(27.555691 ,76.616558),




new google.maps.LatLng(28.700191 ,77.158040),

new google.maps.LatLng(28.624860 ,77.110868),

new google.maps.LatLng(28.546001 ,77.246421),

new google.maps.LatLng(28.625817 ,77.234250),
new google.maps.LatLng(28.604976 ,77.223092),



new google.maps.LatLng(28.607158 ,77.251229),
















new google.maps.LatLng(28.639268 ,77.208450),

new google.maps.LatLng(28.589369 ,77.154080),





new google.maps.LatLng(28.611232 ,77.240173),




















new google.maps.LatLng(29.001226 ,77.719813),









new google.maps.LatLng(28.564111 ,77.234139),
new google.maps.LatLng(28.673751 ,77.127338),



new google.maps.LatLng(28.600091 ,77.227042),


new google.maps.LatLng(28.626370 ,77.220546),

new google.maps.LatLng(28.590610 ,77.260562),

new google.maps.LatLng(28.568103 ,77.205361),
new google.maps.LatLng(28.586246 ,77.212322),








new google.maps.LatLng(28.640446 ,77.104918),




new google.maps.LatLng(19.195344 ,73.178629),

new google.maps.LatLng(28.645892 ,77.314853),









new google.maps.LatLng(28.543693 ,77.239078),
new google.maps.LatLng(28.596501 ,77.369136),



new google.maps.LatLng(28.545021 ,77.306143),


new google.maps.LatLng(28.611232 ,77.240173),


new google.maps.LatLng(28.630095 ,77.077984),
new google.maps.LatLng(28.653207 ,77.122508),
new google.maps.LatLng(28.368388 ,77.314689),
new google.maps.LatLng(28.622149 ,77.225800),
new google.maps.LatLng(28.644357 ,77.199825),




new google.maps.LatLng(28.651596 ,77.158244),
new google.maps.LatLng(28.634181 ,77.089001),


new google.maps.LatLng(28.600995 ,77.263537),
new google.maps.LatLng(28.575671 ,77.156686),

new google.maps.LatLng(28.637179 ,77.272123),


new google.maps.LatLng(28.528935 ,77.264940),



new google.maps.LatLng(22.650269 ,88.363525),


new google.maps.LatLng(22.571167 ,88.351038),
new google.maps.LatLng(22.540735 ,88.373858),
new google.maps.LatLng(22.584199 ,88.391554),
new google.maps.LatLng(22.499755 ,88.304800),
new google.maps.LatLng(22.597228 ,88.360704),




new google.maps.LatLng(22.526668 ,88.352675),


new google.maps.LatLng(22.559170 ,88.384511),
new google.maps.LatLng(22.507391 ,88.230296),


new google.maps.LatLng(22.620785 ,88.413503),



new google.maps.LatLng(27.183867 ,77.997421),
new google.maps.LatLng(22.589384 ,88.368928),
new google.maps.LatLng(19.163133 ,73.029828),

new google.maps.LatLng(22.595575 ,88.353061),
new google.maps.LatLng(18.944304 ,72.822698),

new google.maps.LatLng(22.487052 ,88.313172),


new google.maps.LatLng(22.561711 ,88.367535),

new google.maps.LatLng(22.522722 ,88.354074),
new google.maps.LatLng(22.520937 ,88.340251),
new google.maps.LatLng(19.203594 ,73.104435),
new google.maps.LatLng(22.564659 ,88.359262),
new google.maps.LatLng(22.481483 ,88.315832),
new google.maps.LatLng(22.540271 ,88.325918),
new google.maps.LatLng(22.495610 ,88.339582),
new google.maps.LatLng(22.540936 ,88.366732),



new google.maps.LatLng(22.539094 ,88.368018),
new google.maps.LatLng(22.520680 ,88.370894),


new google.maps.LatLng(22.648168 ,88.341571),










new google.maps.LatLng(28.651598 ,77.237643),

new google.maps.LatLng(22.573671 ,88.345558),

new google.maps.LatLng(22.489519 ,88.338484),
new google.maps.LatLng(22.541388 ,88.353646),
new google.maps.LatLng(22.639263 ,88.425084),
new google.maps.LatLng(22.538994 ,88.376660),
new google.maps.LatLng(22.474653 ,88.357171),


new google.maps.LatLng(22.585832 ,88.315382),

new google.maps.LatLng(22.479992 ,88.355016),


new google.maps.LatLng(22.569832 ,88.343572),

new google.maps.LatLng(22.459616 ,88.326087),
new google.maps.LatLng(22.502008 ,88.356383),
new google.maps.LatLng(22.576241 ,88.351924),



new google.maps.LatLng(22.532372 ,88.343487),
new google.maps.LatLng(22.618783 ,88.389205),
new google.maps.LatLng(22.540947 ,88.347026),
new google.maps.LatLng(22.532372 ,88.343487),

new google.maps.LatLng(22.574311 ,88.361571),
new google.maps.LatLng(22.503350 ,88.384193),

new google.maps.LatLng(22.608108 ,88.418012),
new google.maps.LatLng(22.544291 ,88.368585),

new google.maps.LatLng(22.468306 ,88.378508),


new google.maps.LatLng(22.529979 ,88.343900),


new google.maps.LatLng(22.555783 ,88.365021),
new google.maps.LatLng(22.505817 ,88.363999),
new google.maps.LatLng(28.613939 ,77.209021),
new google.maps.LatLng(22.575735 ,88.296243),
new google.maps.LatLng(22.691013 ,88.450120),

new google.maps.LatLng(22.524618 ,88.327618),
new google.maps.LatLng(22.425665 ,87.319883),
new google.maps.LatLng(22.582029 ,88.356131),
new google.maps.LatLng(22.513252 ,88.367138),
new google.maps.LatLng(22.475888 ,88.311670),
new google.maps.LatLng(22.567350 ,88.353972),
new google.maps.LatLng(22.524456 ,88.352743),

new google.maps.LatLng(22.522487 ,88.345824),


new google.maps.LatLng(28.512140 ,77.242786),
new google.maps.LatLng(22.470406 ,88.360661),
new google.maps.LatLng(22.593801 ,88.386982),
new google.maps.LatLng(22.480507 ,88.367307),

new google.maps.LatLng(22.492327 ,88.392276),
new google.maps.LatLng(22.566097 ,88.341696),


new google.maps.LatLng(22.647051 ,88.431683),
new google.maps.LatLng(22.473436 ,88.298840),

new google.maps.LatLng(22.508059 ,88.362915),




new google.maps.LatLng(22.504674 ,88.374094),

new google.maps.LatLng(22.556438 ,88.374393),
new google.maps.LatLng(22.578917 ,88.349596),
new google.maps.LatLng(22.849386 ,88.627564),




new google.maps.LatLng(22.200000 ,88.200000),
new google.maps.LatLng(22.563072 ,88.395143),


new google.maps.LatLng(22.561901 ,88.379863),
new google.maps.LatLng(22.580239 ,88.390459),
new google.maps.LatLng(22.532941 ,88.397497),
new google.maps.LatLng(22.550411 ,88.283218),



new google.maps.LatLng(22.588978 ,88.368772),


new google.maps.LatLng(22.534124 ,88.323867),


new google.maps.LatLng(22.518119 ,88.356678),


new google.maps.LatLng(22.590665 ,88.353217),
new google.maps.LatLng(22.479591 ,88.358629),
new google.maps.LatLng(22.520858 ,88.370469),
new google.maps.LatLng(22.466425 ,88.107554),


new google.maps.LatLng(22.526926 ,88.354097),

new google.maps.LatLng(22.576241 ,88.351924),

new google.maps.LatLng(22.664360 ,88.431753),




new google.maps.LatLng(22.553151 ,88.364247),


new google.maps.LatLng(22.588104 ,88.362768),



new google.maps.LatLng(22.595575 ,88.353061),

new google.maps.LatLng(22.630163 ,88.368320),



new google.maps.LatLng(22.492511 ,88.258420),

new google.maps.LatLng(22.476275 ,88.382119),



new google.maps.LatLng(18.944304 ,72.822698),


new google.maps.LatLng(22.766114 ,88.351600),

new google.maps.LatLng(22.605646 ,88.404332),


new google.maps.LatLng(22.556298 ,88.344004),


new google.maps.LatLng(22.562860 ,88.349230),

new google.maps.LatLng(22.507740 ,88.347043),


new google.maps.LatLng(29.797108 ,76.395507),




new google.maps.LatLng(22.489009 ,88.396147),
new google.maps.LatLng(22.627153 ,88.433119),


new google.maps.LatLng(22.586807 ,88.395964),
new google.maps.LatLng(22.585302 ,88.286308),
new google.maps.LatLng(22.540735 ,88.373858),


new google.maps.LatLng(22.595484 ,88.435714),
new google.maps.LatLng(22.832318 ,88.396754),
new google.maps.LatLng(22.590548 ,88.396306),
new google.maps.LatLng(22.551167 ,88.363151),


new google.maps.LatLng(22.618961 ,88.395238),
new google.maps.LatLng(22.616668 ,88.427060),

new google.maps.LatLng(22.603707 ,88.414245),
new google.maps.LatLng(22.603707 ,88.414245),

new google.maps.LatLng(22.579444 ,88.353682),
new google.maps.LatLng(22.585912 ,88.362251),
new google.maps.LatLng(22.603707 ,88.414245),
new google.maps.LatLng(22.502621 ,88.367791),
new google.maps.LatLng(22.703096 ,88.341049),
new google.maps.LatLng(22.577486 ,88.380986),
new google.maps.LatLng(22.760108 ,88.371076),


new google.maps.LatLng(22.595769 ,88.263639),
new google.maps.LatLng(28.651598 ,77.237643),
new google.maps.LatLng(22.565472 ,88.371280),
new google.maps.LatLng(22.594351 ,88.354895),




new google.maps.LatLng(22.576552 ,88.362178),
new google.maps.LatLng(22.570196 ,88.396754),
new google.maps.LatLng(22.603471 ,88.420436),
new google.maps.LatLng(28.618433 ,77.373586),
new google.maps.LatLng(22.519176 ,88.399505),

new google.maps.LatLng(22.618334 ,88.445234),
new google.maps.LatLng(22.603707 ,88.414245),
new google.maps.LatLng(22.652533 ,88.346675),
new google.maps.LatLng(22.599308 ,88.431041),
new google.maps.LatLng(22.565570 ,88.339682),
new google.maps.LatLng(22.541013 ,88.346923),
new google.maps.LatLng(22.620538 ,88.397055),

new google.maps.LatLng(22.604134 ,88.385271),
new google.maps.LatLng(22.618961 ,88.395238),
new google.maps.LatLng(22.603707 ,88.414245),
new google.maps.LatLng(22.555783 ,88.365021),
new google.maps.LatLng(22.603707 ,88.414245),
new google.maps.LatLng(22.610000 ,88.400000),

new google.maps.LatLng(22.539094 ,88.368018),
new google.maps.LatLng(22.621792 ,88.417970),

new google.maps.LatLng(22.610710 ,88.427060),
new google.maps.LatLng(22.560663 ,88.411910),
new google.maps.LatLng(22.583975 ,88.359751),
new google.maps.LatLng(22.607755 ,88.429484),
new google.maps.LatLng(22.624972 ,88.438571),
new google.maps.LatLng(22.613223 ,88.380498),

new google.maps.LatLng(22.605444 ,88.421607),
new google.maps.LatLng(22.647051 ,88.431683),
new google.maps.LatLng(22.519176 ,88.399505),
new google.maps.LatLng(22.343348 ,88.609489),
new google.maps.LatLng(22.625534 ,88.419789),


new google.maps.LatLng(22.618477 ,88.384018),
new google.maps.LatLng(22.583333 ,88.416667),
new google.maps.LatLng(22.573735 ,88.305706),

new google.maps.LatLng(22.590548 ,88.396306),
new google.maps.LatLng(22.200000 ,88.200000),

new google.maps.LatLng(22.633388 ,88.458305),

new google.maps.LatLng(22.572034 ,88.357323),
new google.maps.LatLng(22.541284 ,88.352424),

new google.maps.LatLng(22.681194 ,88.375738),
new google.maps.LatLng(22.611887 ,88.385210),

new google.maps.LatLng(22.536330 ,88.334331),

new google.maps.LatLng(22.585054 ,88.346928),
new google.maps.LatLng(22.641590 ,88.454523),
new google.maps.LatLng(22.620538 ,88.397055),

new google.maps.LatLng(22.622720 ,88.436754),
new google.maps.LatLng(22.597841 ,88.405848),
new google.maps.LatLng(22.595575 ,88.353061),
new google.maps.LatLng(22.600914 ,88.380804),

new google.maps.LatLng(22.612025 ,88.424552),
new google.maps.LatLng(22.641590 ,88.454523),
new google.maps.LatLng(22.520217 ,88.365622),
new google.maps.LatLng(22.539284 ,88.373272),
new google.maps.LatLng(22.599295 ,88.402210),
new google.maps.LatLng(22.652414 ,88.347953),

new google.maps.LatLng(22.766114 ,88.351600),
new google.maps.LatLng(22.622976 ,88.405492),
new google.maps.LatLng(22.699967 ,88.464081),
new google.maps.LatLng(22.605352 ,88.368690),

new google.maps.LatLng(22.535834 ,88.338969),
new google.maps.LatLng(22.412576 ,88.475143),

new google.maps.LatLng(22.641590 ,88.454523),

new google.maps.LatLng(22.539479 ,88.341844),
new google.maps.LatLng(22.624972 ,88.438571),
new google.maps.LatLng(22.610710 ,88.427060),
new google.maps.LatLng(22.636088 ,88.339871),
new google.maps.LatLng(22.560069 ,88.352468),
new google.maps.LatLng(22.330560 ,88.270450),

new google.maps.LatLng(19.083713 ,72.882193),


new google.maps.LatLng(19.060692 ,72.836250),

new google.maps.LatLng(19.176533 ,72.947533),
new google.maps.LatLng(19.172277 ,72.835483),
new google.maps.LatLng(19.178387 ,72.847493),


new google.maps.LatLng(19.076564 ,72.844163),

new google.maps.LatLng(19.092131 ,72.882598),

new google.maps.LatLng(19.075984 ,72.877656),
new google.maps.LatLng(19.018785 ,72.836192),
new google.maps.LatLng(19.005090 ,72.813657),


new google.maps.LatLng(19.064226 ,72.860712),
new google.maps.LatLng(18.953830 ,72.833358),

new google.maps.LatLng(19.071394 ,72.856528),
new google.maps.LatLng(18.960391 ,72.827668),


new google.maps.LatLng(19.165321 ,72.858337),
new google.maps.LatLng(19.017962 ,72.845031),
new google.maps.LatLng(19.205975 ,72.865597),

new google.maps.LatLng(19.173808 ,72.860594),

new google.maps.LatLng(19.053133 ,72.847123),
new google.maps.LatLng(19.055950 ,72.845728),
new google.maps.LatLng(19.074379 ,72.870864),

new google.maps.LatLng(19.034930 ,72.859846),
new google.maps.LatLng(29.934597 ,77.551110),


new google.maps.LatLng(19.065819 ,72.836233),

new google.maps.LatLng(19.155148 ,72.867855),






new google.maps.LatLng(19.077516 ,72.846955),
new google.maps.LatLng(19.026691 ,72.855961),
new google.maps.LatLng(28.607131 ,77.100332),
new google.maps.LatLng(19.259716 ,72.969536),
new google.maps.LatLng(19.461060 ,72.814260),


new google.maps.LatLng(19.085649 ,72.908221),
new google.maps.LatLng(19.113645 ,72.869734),
new google.maps.LatLng(19.051986 ,72.884778),
new google.maps.LatLng(19.136880 ,72.846734),





new google.maps.LatLng(22.514463 ,88.409485),



new google.maps.LatLng(19.156511 ,72.963773),
new google.maps.LatLng(19.113645 ,72.869734),

new google.maps.LatLng(19.997356 ,73.903823),
new google.maps.LatLng(19.164844 ,72.849517),

new google.maps.LatLng(19.255362 ,72.971237),

new google.maps.LatLng(19.093231 ,72.851346),
new google.maps.LatLng(18.568841 ,73.832334),
new google.maps.LatLng(18.958067 ,72.827683),

new google.maps.LatLng(19.259716 ,72.969536),
new google.maps.LatLng(19.054793 ,72.840655),
new google.maps.LatLng(19.117476 ,72.880161),


new google.maps.LatLng(19.201231 ,72.866116),



new google.maps.LatLng(18.953830 ,72.833358),

new google.maps.LatLng(19.115491 ,72.872695),
new google.maps.LatLng(19.204516 ,72.852009),
new google.maps.LatLng(19.119655 ,72.899515),
new google.maps.LatLng(19.182780 ,72.832346),
new google.maps.LatLng(19.051654 ,72.868994),

new google.maps.LatLng(19.029805 ,72.815725),





new google.maps.LatLng(18.967018 ,72.850226),
new google.maps.LatLng(19.054793 ,72.840655),
new google.maps.LatLng(19.075984 ,72.877656),
new google.maps.LatLng(19.180874 ,72.857456),


new google.maps.LatLng(18.941790 ,72.832019),


new google.maps.LatLng(18.954285 ,72.812774),
new google.maps.LatLng(19.204481 ,72.863926),
new google.maps.LatLng(18.769427 ,73.404212),
new google.maps.LatLng(19.061790 ,72.852610),


new google.maps.LatLng(19.257027 ,72.871280),
new google.maps.LatLng(19.032819 ,73.021638),
new google.maps.LatLng(18.748060 ,73.407220),

new google.maps.LatLng(19.079974 ,72.829508),
new google.maps.LatLng(19.128585 ,72.925358),
new google.maps.LatLng(19.086501 ,72.888839),

new google.maps.LatLng(18.959743 ,72.848172),


new google.maps.LatLng(19.075231 ,72.881498),
new google.maps.LatLng(19.049708 ,72.875917),
new google.maps.LatLng(19.062093 ,72.891762),
new google.maps.LatLng(19.036643 ,72.840335),
new google.maps.LatLng(19.138337 ,72.865394),



new google.maps.LatLng(18.939713 ,72.827243),



new google.maps.LatLng(19.155148 ,72.867855),
new google.maps.LatLng(28.651598 ,77.237643),

new google.maps.LatLng(22.502897 ,88.352925),
new google.maps.LatLng(19.042926 ,72.863778),
new google.maps.LatLng(22.538193 ,88.345328),
new google.maps.LatLng(19.133430 ,72.913268),
new google.maps.LatLng(19.176218 ,72.861698),

new google.maps.LatLng(19.075389 ,72.997172),
new google.maps.LatLng(19.044067 ,72.858496),
new google.maps.LatLng(19.032800 ,72.896357),

new google.maps.LatLng(18.958102 ,72.823315),

new google.maps.LatLng(19.063365 ,72.899545),
new google.maps.LatLng(19.221876 ,73.100318),
new google.maps.LatLng(19.075181 ,72.841469),

new google.maps.LatLng(18.957856 ,72.829577),
new google.maps.LatLng(19.218331 ,72.978090),
new google.maps.LatLng(19.087824 ,72.901198),
new google.maps.LatLng(19.104834 ,72.928750),
new google.maps.LatLng(19.186418 ,73.021341),

new google.maps.LatLng(19.124599 ,72.896164),
new google.maps.LatLng(18.774943 ,73.353434),
new google.maps.LatLng(18.976070 ,72.831150),

new google.maps.LatLng(19.113645 ,72.869734),

new google.maps.LatLng(18.507983 ,73.830256),

new google.maps.LatLng(19.206923 ,73.168762),

new google.maps.LatLng(19.115108 ,72.858183),


new google.maps.LatLng(19.109063 ,72.878124),
new google.maps.LatLng(19.276068 ,72.888817),

new google.maps.LatLng(19.095171 ,72.915788),
new google.maps.LatLng(18.953830 ,72.833358),
new google.maps.LatLng(19.155148 ,72.867855),

new google.maps.LatLng(19.246164 ,72.850906),


new google.maps.LatLng(19.063575 ,72.840470),


new google.maps.LatLng(19.026271 ,72.855313),

new google.maps.LatLng(19.052198 ,73.019712),




new google.maps.LatLng(18.980905 ,72.843168),

new google.maps.LatLng(18.946703 ,72.831238),


new google.maps.LatLng(19.213677 ,72.990345),
new google.maps.LatLng(19.172910 ,72.836012),
new google.maps.LatLng(19.230288 ,72.840001),
new google.maps.LatLng(19.237188 ,72.844136),
new google.maps.LatLng(19.091861 ,72.882593),
new google.maps.LatLng(19.210831 ,72.874741),
new google.maps.LatLng(19.084021 ,72.889208),
new google.maps.LatLng(19.018503 ,72.848067),

new google.maps.LatLng(19.136325 ,72.827660),
new google.maps.LatLng(19.012443 ,72.823602),
new google.maps.LatLng(18.968247 ,72.807347),
new google.maps.LatLng(19.054793 ,72.840655),
new google.maps.LatLng(18.503135 ,73.819624),
new google.maps.LatLng(19.230288 ,72.840001),
new google.maps.LatLng(19.155148 ,72.867855),
new google.maps.LatLng(19.119215 ,72.847039),
new google.maps.LatLng(19.129597 ,72.876088),

new google.maps.LatLng(19.060533 ,72.849348),


new google.maps.LatLng(19.076460 ,72.878964),



new google.maps.LatLng(18.962918 ,72.805388),
new google.maps.LatLng(19.075984 ,72.877656),
new google.maps.LatLng(19.047322 ,73.069905),
new google.maps.LatLng(19.131689 ,72.935193),
new google.maps.LatLng(19.005412 ,72.814251),
new google.maps.LatLng(19.050841 ,72.874997),



new google.maps.LatLng(19.189047 ,72.974972),
new google.maps.LatLng(19.054793 ,72.840655),
new google.maps.LatLng(19.136325 ,72.827660),
new google.maps.LatLng(19.180259 ,72.861280),
new google.maps.LatLng(18.970887 ,72.803447),
new google.maps.LatLng(19.237188 ,72.844136),

new google.maps.LatLng(19.128585 ,72.925358),

new google.maps.LatLng(19.103052 ,72.846691),


new google.maps.LatLng(19.113645 ,72.869734),
new google.maps.LatLng(19.240330 ,73.130539),

new google.maps.LatLng(18.977819 ,72.810482),
new google.maps.LatLng(19.150968 ,72.875815),
new google.maps.LatLng(19.295233 ,72.854390),
new google.maps.LatLng(18.947330 ,72.840633),
new google.maps.LatLng(19.017255 ,73.108802),

new google.maps.LatLng(19.049708 ,72.875917),
new google.maps.LatLng(18.945724 ,72.823760),
new google.maps.LatLng(19.054793 ,72.840655),
new google.maps.LatLng(19.100227 ,72.895136),
new google.maps.LatLng(19.174235 ,72.859363),
new google.maps.LatLng(18.921789 ,72.834723),
new google.maps.LatLng(19.066653 ,72.900609),
new google.maps.LatLng(18.946386 ,72.834969),
new google.maps.LatLng(19.186418 ,73.021341),

new google.maps.LatLng(19.017086 ,72.841069),
new google.maps.LatLng(19.085649 ,72.908221),


new google.maps.LatLng(18.992748 ,72.831068),


new google.maps.LatLng(19.118534 ,72.895635),
new google.maps.LatLng(19.115020 ,72.849513),


new google.maps.LatLng(19.228978 ,72.856814),

new google.maps.LatLng(18.995110 ,72.825688),
new google.maps.LatLng(19.058679 ,72.844377),
new google.maps.LatLng(19.062577 ,72.901253),
new google.maps.LatLng(19.021928 ,72.839378),
new google.maps.LatLng(19.088041 ,72.837147),


new google.maps.LatLng(19.045719 ,72.821816),

new google.maps.LatLng(22.649317 ,88.414940),
new google.maps.LatLng(19.103528 ,72.887962),
new google.maps.LatLng(19.041625 ,72.855631),
new google.maps.LatLng(19.204516 ,72.852009),
new google.maps.LatLng(19.162827 ,72.956505),

new google.maps.LatLng(19.114130 ,73.008670),
new google.maps.LatLng(19.204516 ,72.852009),
new google.maps.LatLng(19.104555 ,72.886243),

new google.maps.LatLng(19.065819 ,72.889993),
new google.maps.LatLng(18.972081 ,72.805038),
new google.maps.LatLng(19.094051 ,72.883185),
new google.maps.LatLng(19.150269 ,72.853025),
new google.maps.LatLng(19.109858 ,72.878430),

new google.maps.LatLng(18.969025 ,72.820529),
new google.maps.LatLng(19.076277 ,72.865400),
new google.maps.LatLng(19.157935 ,72.993476),

new google.maps.LatLng(19.075984 ,72.877656),





new google.maps.LatLng(19.032665 ,73.085047),
new google.maps.LatLng(19.122152 ,72.890834),
new google.maps.LatLng(19.017086 ,72.841069),


new google.maps.LatLng(19.067168 ,72.883197),
new google.maps.LatLng(19.109858 ,72.863359),
new google.maps.LatLng(19.030414 ,72.847170),


new google.maps.LatLng(19.044638 ,72.864627),

new google.maps.LatLng(18.968247 ,72.807347),
new google.maps.LatLng(18.994490 ,72.838991),
new google.maps.LatLng(19.035153 ,72.840443),
new google.maps.LatLng(19.047322 ,73.069905),
new google.maps.LatLng(19.040208 ,72.850850),





new google.maps.LatLng(19.143222 ,72.861328),

new google.maps.LatLng(19.003970 ,72.841319),
new google.maps.LatLng(18.994265 ,72.821279),
new google.maps.LatLng(28.628292 ,77.237102),
new google.maps.LatLng(19.013507 ,72.871551),
new google.maps.LatLng(19.208814 ,72.971339),

new google.maps.LatLng(19.186418 ,73.021341),
new google.maps.LatLng(19.059984 ,72.889999),



new google.maps.LatLng(19.222949 ,72.978594),

new google.maps.LatLng(19.073886 ,72.879988),

new google.maps.LatLng(18.934506 ,72.826824),
new google.maps.LatLng(19.035610 ,72.841907),
new google.maps.LatLng(19.117867 ,72.841568),
new google.maps.LatLng(19.118518 ,72.859017),
new google.maps.LatLng(19.127148 ,72.888945),

new google.maps.LatLng(19.494598 ,72.860410),


new google.maps.LatLng(19.110873 ,72.824222),
new google.maps.LatLng(19.126841 ,72.836241),

new google.maps.LatLng(19.149901 ,72.931134),
new google.maps.LatLng(18.932245 ,72.826438),
new google.maps.LatLng(19.170576 ,72.953885),
new google.maps.LatLng(19.064366 ,72.904124),
new google.maps.LatLng(19.018503 ,72.848067),
new google.maps.LatLng(19.225213 ,72.995618),
new google.maps.LatLng(19.204516 ,72.852009),
new google.maps.LatLng(19.060692 ,72.836250),

new google.maps.LatLng(18.925573 ,72.824222),


new google.maps.LatLng(19.153947 ,72.855794),
new google.maps.LatLng(19.063061 ,72.998905),
new google.maps.LatLng(19.116138 ,72.838588),
new google.maps.LatLng(19.114130 ,73.008670),
new google.maps.LatLng(19.063923 ,72.924299),
new google.maps.LatLng(19.199821 ,72.842594),
new google.maps.LatLng(19.034930 ,72.859846),
new google.maps.LatLng(19.092131 ,72.882598),
new google.maps.LatLng(19.257382 ,72.871741),
new google.maps.LatLng(29.134047 ,76.699812),
new google.maps.LatLng(19.051493 ,73.014991),

new google.maps.LatLng(19.054023 ,72.895526),




new google.maps.LatLng(19.037009 ,72.851917),
new google.maps.LatLng(18.961490 ,72.839962),
new google.maps.LatLng(18.769427 ,73.404212),


new google.maps.LatLng(19.082555 ,72.841763),


new google.maps.LatLng(19.029805 ,72.815725),
new google.maps.LatLng(19.154571 ,72.957819),
new google.maps.LatLng(19.040358 ,72.864471),

new google.maps.LatLng(19.074379 ,72.870864),
new google.maps.LatLng(19.119677 ,72.905081),

new google.maps.LatLng(18.945724 ,72.823760),
new google.maps.LatLng(19.176533 ,72.947533),

new google.maps.LatLng(19.075337 ,72.834259),
new google.maps.LatLng(19.016323 ,72.840123),


new google.maps.LatLng(12.910491 ,77.585717),
new google.maps.LatLng(13.018617 ,77.557804),

new google.maps.LatLng(13.071714 ,77.633597),






new google.maps.LatLng(13.000184 ,77.676610),



new google.maps.LatLng(12.839939 ,77.677003),
new google.maps.LatLng(12.808906 ,77.578429),








new google.maps.LatLng(13.071714 ,77.633597),




























new google.maps.LatLng(12.996812 ,77.582275),

new google.maps.LatLng(12.973094 ,77.635993),









new google.maps.LatLng(12.743646 ,77.488172),


new google.maps.LatLng(19.030274 ,72.853925),








new google.maps.LatLng(12.936053 ,77.609043),
new google.maps.LatLng(28.393340 ,77.311397),


new google.maps.LatLng(12.987899 ,77.512327),
new google.maps.LatLng(12.983788 ,77.752403),

new google.maps.LatLng(13.014591 ,77.570925),




new google.maps.LatLng(12.941802 ,77.637477),














new google.maps.LatLng(13.370154 ,77.683455),

new google.maps.LatLng(12.990058 ,77.552492),

new google.maps.LatLng(13.015000 ,77.572717),
new google.maps.LatLng(12.979693 ,77.590658),
new google.maps.LatLng(13.031800 ,77.559367),





new google.maps.LatLng(12.927348 ,77.621624),

new google.maps.LatLng(18.595081 ,73.828673),





new google.maps.LatLng(13.004017 ,77.687776),

new google.maps.LatLng(13.001567 ,77.598797),








new google.maps.LatLng(12.922943 ,77.673159),
new google.maps.LatLng(12.994359 ,77.585115),
new google.maps.LatLng(12.969304 ,77.570179),















new google.maps.LatLng(13.010298 ,77.565207),

new google.maps.LatLng(12.951783 ,77.569417),




new google.maps.LatLng(12.992523 ,77.588626),


new google.maps.LatLng(12.935055 ,77.611086),



new google.maps.LatLng(12.965846 ,77.702399),




new google.maps.LatLng(12.971592 ,77.586906),





new google.maps.LatLng(12.943212 ,77.597391),
















new google.maps.LatLng(27.180444 ,77.983664),
new google.maps.LatLng(12.908154 ,77.628298),






new google.maps.LatLng(13.019568 ,77.596813),


new google.maps.LatLng(13.050132 ,77.623429),






new google.maps.LatLng(12.917213 ,77.622769),



new google.maps.LatLng(12.964830 ,77.748702),


new google.maps.LatLng(12.994982 ,77.592963),








new google.maps.LatLng(12.956947 ,77.701535),



new google.maps.LatLng(12.961463 ,77.583289),






new google.maps.LatLng(12.907282 ,77.695547),

new google.maps.LatLng(19.230295 ,72.852571),










new google.maps.LatLng(28.590385 ,77.138403),
new google.maps.LatLng(12.951160 ,77.622108),












new google.maps.LatLng(13.001114 ,77.599409),





new google.maps.LatLng(12.915047 ,77.599807),




new google.maps.LatLng(12.969593 ,77.593104),
new google.maps.LatLng(12.916020 ,77.637896),
new google.maps.LatLng(12.890590 ,77.673360),
new google.maps.LatLng(13.012099 ,77.589125),



new google.maps.LatLng(19.065373 ,72.833268),














new google.maps.LatLng(12.975339 ,77.587732),
new google.maps.LatLng(12.915047 ,77.599807),


new google.maps.LatLng(13.038764 ,77.503005)

];

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(22.5667, 88.3667),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var pointArray = new google.maps.MVCArray(TrafficData);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });

  heatmap.setMap(map);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 40);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.5);
}

google.maps.event.addDomListener(window, 'load', initialize);