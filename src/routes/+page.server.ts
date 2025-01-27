// +page.server.ts
import type { PageServerLoad } from './$types';

let me_ascii = `
OOOOOOOOOOOOOkkkkkkkkkkkkkkkxxxxxxxxxxxxdddddddddddddddddddxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxx
OOOOOOOOOOOOOOkkkkkkkkkkkkkkkxxxxxxxddddddddddddddddddddddddxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxx
OOOOOOOOOOOOOOOOkkkkkkkkkkkkkkkkkxdooooooooooddddddddddddddxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxkxxxxxxxxxxxxxxxxx
OOOOOOOOOOOOOOOOOkkkkkkkkkkkkkkkkkollllllllooooooodddddddddxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxx
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkollllllllllllooooddddddxxxxxxxxxxxxxkxxxkkkxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxx
0OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkollllllllllllloodddddxxxxxxxxxxxxxxxxxxxkxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxkxxxxxxxxxxxxxxxxxxx
00000000000000OOOOOOOOOOOOOOOOOOOkolllllllllllllooddxxxxxxxddddddddxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxxxxx
000000000000000OOOOOOOOOOOOOOOOOOkollllllllllllooooldxxxddddoodddxxxxxdddddodxxxxkkkkkkkkkkkkkkkkkkkkxxkkkxxxxxxxxxxxxxxxxxxxxxxxx
00000000000000OOOOOOOOOOOOOOOOOOOkolllllllllllooooocloooccldxxxxxxdxxxxxxxxdddxxxxkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
0000000000000000OOOOOOOOOOOOOOOOOkollllllllllooooddolcclodxkkkkxxxxxxddddxxxdddxxxxxxxkkkkxxxkkxkkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
000000000000000OOOOOOOOOOOOOOOOOOxllllllllloooooodddxdddkOOOOO00kxoooolloldddxxddxxxxxxxxxxxxkxxxkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdx
0000000000000000OOOOOOOOOOOOOOOOkxlooooloooooodoodxkOkkOO000KKK00OOkxl;,;cclodkkkxxxxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxd
0000000000000000OOOOOOOOOOOOOOOOkxloooooooooooxxk0000O00KKXXXXXXXKKKK0kdlc:;:coooxxdoxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
00000000000000OOOOOOOOOOOOOOOOOOkxooddddxxdooooxxxOOO0KXXXXNNNNNXOkOKK0Odo:'',ccokkkxkddOkooxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdxkOO00
0000000000000OOOOOOOOOOOOOOOOOOOOxoddxkOOO0kkOOxxOOO00KXXXXXNNXXX0lcoOOkxol:;:ldddxdxkkokkOOOOkkkkkkkxxxxxxxxxxxxxxxxxxxxxxxxXXXXK
0000000000000OOOOOOOOOOOOOOOOOOOOkkO0KXXXXXKOO00O0000KKKKKKKXXXXX0OdclddooccccldkodolddddokkkkOOOOOOOkkkdooddddxxxxxxxxxxxxdxKXXXK
000000000000000OOOOOOOOOOOOOOOO000KKXXXXXXXXK0OkOO00O00000KKK00KKK0kxolcc:;;:clodllollccld0XKkO0Odxkkkxddolc;;loddddxxxxxxxdxKXXXK
00000000000000000OOOOOOOOOOOOO00KXXNNXXXXKKOxoooxOOOkxxdooxkkkddxOO0Oxdolc:::cclolodlc:clodx00odOOOxxxxdol:::;;cloddddddddddxKXXXK
0000000000000000000OOOOOOOkkkO00XXNNNXXXXK0xoc:loooolc:;;;:cloocccldddxxddolc::locxkxoc:cccox0kdOOOxdccoddo:cllcclolodddddddxKXXXK
0000000000000OOOOO0OOOOOOOkOOO00XNNNNNXXK0Odlc:cc:;;;,''',,,,;clc:::cccloddodxdoldOxc:clodxkkkkklco:,;o0xll::ccodcoddxxxddddxKXXXK
00000000000O0OOOOOOOOOOOOOOOO00KXNNXXXX0kdlc:;;;,,''.....''''',;;:c::;:clodddxkddxdo:;:ldoodkO00xccccdk0do;:ccccddlcxO00kddddKXXXK
0000000000000OOOOOOOOOOOOOOO00KKXNNXNX0kl;;:;;,,'''.........'..',;;,,;,,;:ccclxdoollollooc;,:x00O0OxkxOOdOx:odddolc;cookkddddKXXXK
0000000000000000OOOOOOOOOOOO0KKK0KKXXKdc:;;,,,,''''.............',;;,,,',,,:::clodoc:coxxxlc:cx0KKK0kxx0Ok0doxkkxxo;;coddddddKXXXK
00000000000000000OOOOOOOOxdk000OOO0XXko:;,;,,,,,''.................,;,'',,;;;,,;cldol::cclcc;;lxO0KX0oxk0xdOxoodxdo,,clodddddKXXXK
000000000000000OOOOOOOOO0OkOOOOOOk0XKkl;;,,,,,,,,'''.................''''...''',;:codddolcc:;,;lOK0XNkdxO0xxxkxddolc:oxxxdddd0KKXK
0000000000000000OOOOO0O0KKK0OO00KKXKOd:;,,,,,,,''''............... ....,,...'',,,;ccccooodoll:cdkO0KXXdxxkOddd:;:lollokxOOddd0KKXK
000000000000000OOOOOOO00KXK0OO0KKKK0kc;,,,,,,,,'''.....................'''...',;::llcloodkkxolccoO0XXXkxxdOOxd:';:odxxxxO0ddd0KKKK
00000000O00O00O0OOOOOOO0KKK0OO0KKO0ko:;,,,,,,,,''........................',,,::cllodc,;odkkkddooxkO0XXOxkO00Okc;,;odoxOO00ddd0KKKK
00000000000OOOOOOOOOOOO00KK00OOOOkOkdl:;,,,;;:;,''..''.........  ......''',;:cccoodddolllloxdoc:cox0O0OdkkO0OOxc;;lddxkkkdooo0K000
0000000OOO0OOOOOOOOOOOOOOOOO00OOO00Okdc:;;:;;::;,,'',''''......    .......',:ccloxxxOOOxdxOkoodkOOxoxKxddddk0OOxlloodxdooooooooooo
00000000OOOOOOOOOOOOOOOOOOOOK00O0K00Okdlccc;;ccc:;;,,,,,'''.....   .........,;ccoxkkOkxkOO0KOkkkxxdd0x:ldkO00OOkdddocclolooooooooo
000000OOOOOOOOOOOOOOOOOOOOOO0KXKXXXK0OOxool;,clooddxxdddolc:;,'..... ........';:coxkxddOKK000Okkxdldc.':oxkO00Okxdoocccloccloooooo
000000OO0OOOOOOOOOOOOOOOOOOOO0KXXKKKKKK0ko:,,:loddxxxkkkkkxxdocc:,'............',:ooollxk000kdxOkdo:..';dxkkO000Okololccll:loodxdd
000000OOO0OOOOOOOOOOkxxkOOOOOOKK00KKKKK0k;'..,coddxxkkOOkkxdoollcc:;,'............;ldxxkkO0O000KOx;...;occcodxkOOxc;:lllclolookoll
00000OOOOOOOOOOOOOOkxxxkOOkkk0KKO0XXXKKk;.. ..,oxkkOO00O00K0kxdoc:;;;,'....     ...cdk00O00KK00Ok:'.'cl;;;:cldkkkkdlccododdddokoll
0OOOOOOOOOOOOOOOOOOOOOkkkkkOKK0OxOKK0Ol'.   ...'coxkkOOOOOOkddxkkdoc;,'.....      .;ok00000000OOo;''lo;,'':xOO00OOkdoxkxxxxddoxlll
OOOOOOOOOOOOOOOOOOOOOOkxxkkOOOkkdK0Okc'..    .....,ldxxddolc::;;,,,,'...         ..,cdOO0000000ko:;dd:,',oO00OOOOOOkxkOkxdodxdkOOO
OOOOOOOOOOOOOOOOOOOOOOOkkkkkkkkkxKOOo,.......      ..,;;;;;,'.......            ...':lkOOO000OOkdoxOoc::x000OOOOOOOkkOOxxkOKKXXXXX
OOOOOOOOOOOOOOOOOOOOOOOOOOkkkkkkx0Ox;'............   ..'''.........            .....:oOOOOOO0OOOkO0kxdox0000OOOOOOOxkOOO0KKKXXXXXX
OOOOOOOOOOOOOOOOOOOOOOOOOOkkkkkkkkxc'.. .........................          .  ......:kOOOOO000OOOO0OkkkO000OOOOOOOOOO0KKKXXXXXXXXX
OOOOOOOOOOOOOOOOOOOOOOOOOOkkkkkkkx:....  .........................        ..........,xOOOOO0000OO00OOOOOOOOOOOOOOOO0KKKKKXXXXXXXXX
OOOOOOOOOOOOOOOOOOOOOOOOOOOkkkkkkl'....   .........''''.............................'xOOOOO00000000000OOOOOOOOOOOOOOKKKKKKKKKKXXXX
OOOOOOOOOOOOOOOOOOOOOOOOOOOOkkkkko;,.............''','''............................'xkOOOO00000000000OOOOOOOOOOO0000KKKKKKKKKKKKK
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOkkkdkdl:,,,:clll:,',;;,,,,''.....'......................xkOOOO0000O00OOOOOOOOOOOOOOO00KKKKKKKKKKKKKKK
OOOOOOOOOOOOOOOOOOOOOOOOOOKOOOOkxOkkxdddddxddo:,''''',,,,'....''.....................oOkOOO000OO00OOOkkOOOOOOOOkO00KKKKKKKKKKKKKKK
OOOOOOOOOOOOOOOOOOOOOOOOOOK0KKKKK0O0000Okxl;'.........',,'''''''.....................cOkkOOOOOOOO0kkkxxxkOOOOkdok00KKKKKKKKKKKKKKK
OOOOOOOOOOOOOOOOOOOOOOO00KXKXXXXXKO0000xl:;''''''''.....'''''''''.....''.............;kkOkOOOOkkkOxxxddoodxxooddxk0000KKKKKKKKKKKK
OOOOOOOOOOOOOOOOOOOOO000KKXXKXXXXX000Od;;;;,,,,,,,,,,'...''''''''....'''''''.........;xkkkkkkkxddxkdoolodxxl::ccodxOO00KKKKKKKKKKK
OOOOOOOOOOOOOOOOOOO0000KKKKXXXXXXNKO0kd:;:;;;;;,,,,;;,''.''''''''....''''''''........;lodxkkxdoolllodxkkkxoolllldxO000000000000KKK
OOOOOOOO00000OOO0000000K00KKKKXKKKKOOOOkxdxdolc:;;;;:;;,'''''''''...........'''......:cclodkkkdooodxkOkxdddoodxkOO0000000000000000
OOOOOO000000000O0000000XXNNNNNNNNNNK000000Okxxddollllc::;,,'''''''............''....':cclloxOOOOOOOkkkkkxdddxkO00O0000000000000000
OOO0000OO00OOOOOOOOOO00NNNNNNNNNNNNX000kdlc:;;;;;;;;,,;;;;,,,,'''''................';:cccllokOOkkxxxxdddooldkkOOOO0O00000000000000
OOO0OOOOOOOOOOOOOOOOOO0XNNNNNNNNNNNXXOkxolllcccccc:::;;,,;;;;,,''''''...........''';:cccccclokOkkkkxdooolllodkOOOOOOOOOOOOOO000000
OOOOOOOOOOOOOOOOOOOOOOOXNNNNNNNNXXXXXKkdddddddoollcc:::;;;;;;;,,,''''''....'',,,,,,;::cc:::clxkkxxdoodoolcclokOOOOOOOOOOOOOOOOOOOO
OOOOOOOOOOOOOOOOOOOOOOOXNNNNNNNXXXXXXXKkxxxkkkkxdddolcc:::;;,,,,,,''''''''',,,,,,'';::::::::clxxl::::::clodlooxkkOOOOOOOOOOOOOOOOO
OOOOOOOOOOOOOOOOOOOOOOOKNNNNNNNNXXXXXXX0kOOOOOOOkxdolccc::;,,,,,,,,,,,,,,,;;;;,,'...''''''',,;lo.  .....;loldxxdxkkkkOOOOOOOOOOOOO
OOOOOOOOOOOOOOOOOOOOOOO0NNNNNNNNNNXXXXXKOOOOOOxc;;;;;;,,,,,,,,,,,,,;;;;;::::;;,'..............,;          .;oxxxxkkkkkkkkkkkkkkOOO
OOOOOOOOOOOOOOOOOOOOOOOOXNNNNNNNNNXXXXXXOkkxdkxl:;,,,,,,,,,,,,,;;;::::::::::;,,'..............,.             ..',:ldxxkkkkkkkkkkkk
OOOOOOOOOOOOOOOOOOOOOOOOKNNNNNNNNXXXXXXXKOxdoxkdlc::;;:;;;;;;;::ccccccccc:;,,,''...............                     .cdxxxxxxxkkkk
OOOOOOOOOOOOOOOOOOOOOOOO0NXNNNNNNXXXXXXXKK0kdodoolllcccc:::ccloooolllcc:;,,,,,''..............                         .,:cloddxxx
OOOOOOOOOOOO00OOOOOOOOOOOXXXNXXXXXXXXXXXKK0Okxdoooolllloolllllllllllc:;,,,,,,'''.............                                  .',
kOO00000000000000OOOOOOOOKXXXXXXXXXXK0Okxxddxxxxxxxxddxkxollllllllc:;;;;,,,,,'''............                                      
KKK00000000000000OOOOOOOOOXXXXXXX0Okxxxxxxdxxxxxxxxdddxkkdolllllllc:;;;,,,,,,,''''.........                                       
XKK000000OOOOOOOOOOOOOOOOOKXXX0OxdxxxxxxxdxxxxxxxxxxdddxOxoollllllc:;,,,,,,,,,,'''''......                                        
0OOOkkkkkkkkkkkkkxxxxxxxxkOKOxdddxxxxxxxxdxxxxxdxddxdddxkOdolllllll:;,,,,,,;;;,,,,'''....                                         
KKK00000OOOOOOOOOOOOkkkkkkxxddddxxxxdxxxdddxxxxddddddoddxOkollcccccc:;;,,,;;;;;,,,,''''                                           
KKKK00000000000000000000OxdddddddxxdddxddddxxddddddddoooxOOxlccc:::ccc:;;;;;::;;;,,,,.                                            
KKK0000000000000000000kdddddddddddddddxddddddddddddddooookOkdlc::::::c::;;;;::::;;;;.                                .            
KKK00000000000000000kddddddddddddddddddddddddddooooooollldkkkdlc::;;::::::::::::::;.                                ..            
000000000000000000kddddddddddddddddddddddddddddoolllllccllxxkxdc:::;;:::ccc::::::'                                  .             
0000000000000000Oxddddooooddddddddddddddddddddollc:::c;,:cdddkxdc::::::::cccc:::.                                  ..             
00000000000000Okdddddoooooodoooddoddddddddddddolc:'. ....';lllxxoc:::::::cccc:,.                                  ..              
00000000000KKOddooddooooooooooooooddddodddddddlc:,         .ccdxdoc::::cccccc'..                                  ..   

`;

export const load: PageServerLoad = () => {

    return {
        meAscii: me_ascii
    };
};

