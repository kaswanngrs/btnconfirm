function btnconfirm(){
				var konfirmasi = confirm("Apa kamu yakin ingin meninggalkan situs in dan beralih ke situs lain?");
				var text = "";
				if(konfirmasi === true) {
					var win = window.open('https://fakta-seputar-dunia.blogspot.com', '_blank');
  win.focus();
				}else{
					text = "Maksih karna masih bersama kami :)";
				}
				 document.getElementById("hasil").innerHTML = text;
			}