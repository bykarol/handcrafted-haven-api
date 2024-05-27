const products = [
  { id: 1, pname: 'Handmade Vase', price: 45.00, category_id: 1, artisan_id: 1, quantity: 10, product_description: 'This handmade pottery vase is a special creation made with love and care. Crafted by hand, it has a unique charm that adds warmth to any room. With its earthy colors and natural texture, it brings a touch of nature indoors. You can use it to hold flowers and plants, or simply let it stand alone as a beautiful decoration. Each vase is one-of-a-kind, with its own little imperfections that make it truly special. Whether you place it on a shelf, table, or windowsill, it adds a cozy and inviting feel to your space. Made to last, this pottery vase is a timeless piece of art that will bring joy and beauty to your home for years to come.' },
  { id: 2, pname: 'Wooden Sculpture', price: 150.00, category_id: 2, artisan_id: 2, quantity: 10, product_description: 'This Owl Wooden Sculpture is a stunning creation made entirely by hand from a single block of wood. It stands tall on a sturdy base, emanating an aura of wisdom and grace. Each intricately carved feather and the piercing eyes reflect the skills of the artisan and attention to detail. The natural grain of the wood adds depth and texture, enhancing its organic beauty. Whether displayed indoors or outdoors, this sculpture is sure to captivate viewers with its timeless charm and exquisite craftsmanship. It serves as a tribute to the majestic owl and the incredible artistry of human hands, inviting admiration and contemplation.' },
  { id: 3, pname: 'Metal Jewelry', price: 80.00, category_id: 3, artisan_id: 3, quantity: 10, product_description: 'This Metal Jewelry Heart is a beautiful creation crafted entirely by hand. It gleams with elegance, capturing the essence of love and beauty. Each delicate piece of metal is skillfully shaped and intricately arranged to form an intricate design. Whether worn as a pendant or displayed as a piece of art, this handmade heart evokes a sense of warmth and affection. Its smooth surface and shimmering finish reflect the dedication and craftsmanship of the artisan. Whether given as a gift or kept as a personal treasure, this Metal Jewelry Heart is sure to be cherished for its timeless beauty and heartfelt sentiment.' },
  { id: 4, pname: 'Textile Bag', price: 30.00, category_id: 4, artisan_id: 4, quantity: 10, product_description: 'This handmade Textile Bag is a stylish and practical accessory for any occasion. Crafted with care and attention to detail, it features a clean and minimalist design that complements any outfit. The soft, white fabric adds a touch of elegance, while the sturdy construction ensures durability and longevity. With ample space and convenient pockets, it offers enough room to carry all your essentials in style. Whether you are heading to work, running errands, or going out for the day, this Textile Bag is the perfect companion. Its versatility and timeless appeal make it a must-have addition to any wardrobe. Handcrafted with love and craftsmanship, it is not just a bag, but a statement piece that reflects your individuality and sense of style.'},
  { id: 5, pname: 'Paper Craft', price: 20.00, category_id: 5, artisan_id: 5, quantity: 10, product_description: 'This handmade Paper Craft of red hearts is a delightful testament to love and creativity. Crafted with care, each heart is meticulously cut, folded, and assembled from vibrant red paper, showcasing intricate details and precise craftsmanship. Whether displayed individually or as a part of a larger arrangement, these charming hearts infuse any space with warmth and affection. Their lightweight nature allows for easy hanging or placement on surfaces, making them versatile decorations for home or special events. Whether gifted to a loved one or used to embellish celebrations, these handmade paper hearts radiate joy and sentiment, capturing hearts with their whimsical beauty and heartfelt charm.' },
  { id: 6, pname: 'Chain Golden Bracelet', price: 220.00, category_id: 6, artisan_id: 6, quantity: 10, product_description:'This handmade Chain Golden Bracelet is a stunning accessory that exudes elegance and sophistication. Crafted with care, each link of the chain is meticulously formed and joined together to create a seamless and radiant piece of jewelry. The golden hue adds a touch of luxury and timeless appeal, while its lightweight design ensures comfortable wear all day long. Whether worn alone for a subtle statement or layered with other bracelets for a more dramatic look, this bracelet effortlessly elevates any outfit. Its versatility makes it suitable for both casual and formal occasions, making it a must-have addition to any jewelry collection. Handcrafted with precision and attention to detail, this Chain Golden Bracelet is not just an accessory, but a symbol of craftsmanship and style that will be cherished for years to come.' },
  { id: 7, pname: 'Blue Ceramic Pots', price: 90.00, category_id: 1, artisan_id: 1, quantity: 10, product_description:'These handmade blue ceramic pots are exquisite vessels crafted with skill and care. Each pot is formed by hand, shaped into elegant curves and smooth surfaces. The rich blue glaze adds depth and character to the pots, creating a stunning contrast with their natural clay texture. Whether displayed individually or as a set, these pots bring a touch of sophistication and charm to any space. Their versatile size makes them perfect for holding plants, flowers, or small decorative items, adding a pop of color and style to your home or garden. With their durable ceramic construction and timeless design, these blue pots are not only beautiful but also functional pieces of art that will be treasured for years to come.' },
  { id: 8, pname: 'Wooden Cat', price: 60.00, category_id: 2, artisan_id: 2, quantity: 10, product_description:'The Wooden Cat is a charming creation, hand-carved from smooth wood to capture the grace and playfulness of a feline friend. Its sleek lines and gentle curves bring the cat to life, while the natural grain of the wood adds warmth and character to the sculpture. Whether displayed on a shelf or mantel, this wooden cat is sure to delight cat lovers of all ages with its whimsical charm.' },
  { id: 9, pname: 'Yin Yang Abstract', price: 70.00, category_id: 3, artisan_id: 3, quantity: 10, product_description:'This handmade yin yang abstract modern sculpture is a captivating work of art that mesmerizes with its balance and harmony. Crafted with precision and creativity, the sculpture features smooth curves and intricate patterns that evoke the timeless symbol of yin and yang. The contrasting elements of light and dark, smooth and textured, create a sense of dynamic movement and unity. Whether displayed as a focal point in a living room or as a centerpiece on a desk, this sculpture commands attention and sparks contemplation. Its modern design adds a touch of sophistication to any space, while its handmade quality lends it a unique and personal touch. As a symbol of balance and interconnectedness, this yin yang sculpture serves as a reminder of the inherent harmony in the universe, making it both a beautiful piece of decor and a profound expression of philosophical concepts.' },
  { id: 10, pname: 'Bag Patchwork', price: 25.00, category_id: 4, artisan_id: 4, quantity: 10, product_description:'The colorful Bag Patchwork are a vibrant and eclectic mix of fabrics, stitched together in a patchwork pattern to create a one-of-a-kind accessory. Each patch boasts a different color, pattern, and texture, resulting in a lively and eye-catching bag that adds a pop of color to any outfit. With its spacious interior and sturdy construction, this bag is as practical as it is stylish, making it the perfect accessory for everyday use or special occasions.' },
  { id: 11, pname: 'Rainbow Flower', price: 40.00, category_id: 5, artisan_id: 5, quantity: 10, product_description:'The paper craft Rainbow Flower is a dazzling burst of color and creativity, meticulously crafted from layers of brightly colored paper. Each petal is delicately folded and arranged to form a vibrant rainbow, while the center of the flower blooms with a radiant burst of yellow. Whether displayed as a standalone decoration or incorporated into a larger art project, this rainbow flower brings joy and cheer wherever it goes. Its intricate design and bold colors make it a stunning focal point for any space, brightening even the dreariest of days with its whimsical beauty.' },
  { id: 12, pname: '3 Stone Pendant', price: 420.00, category_id: 6, artisan_id: 6, quantity: 10, product_description:'The 3 Stone Pendant is an elegant accessory adorned with three sparkling gemstones. Set in a delicate metal frame, the stones shimmer and catch the light, adding a touch of glamour to any outfit. Whether worn for a special occasion or as an everyday accessory, this pendant is sure to make a statement and draw admiration from onlookers with its timeless beauty.' },
  { id: 13, pname: 'Old Brown Pottery', price: 120.00, category_id: 1, artisan_id: 1, quantity: 10, product_description:'The Old Brown Pottery exudes rustic charm and earthy elegance. Handcrafted from clay and fired to perfection, each piece boasts a unique texture and color variation that adds character and warmth to any space. Whether used as a functional piece or displayed as decorative art, this pottery evokes a sense of nostalgia and tradition, reminding us of simpler times and the beauty of handmade craftsmanship.' },
  { id: 14, pname: 'The Family', price: 220.00, category_id: 2, artisan_id: 2, quantity: 10, product_description:'The Family sculpture is a heartwarming depiction of familial love and togetherness. Crafted with intricate detail, the sculpture features a family of figures embracing each other in a tender embrace. The smooth lines and gentle curves capture the intimacy and bond shared between family members, making it a touching and meaningful addition to any home.' },
  { id: 15, pname: 'Sleigh Bells', price: 50.00, category_id: 3, artisan_id: 3, quantity: 10, product_description:'The metal Sleigh Bells is a delightful creation that captures the spirit of the holiday season with its festive jingle. Crafted from durable metal, each bell is meticulously shaped and polished to produce a clear and resonant sound. The intricate details of the design, from the sleek curves to the decorative engravings, add to its charm and elegance. These sleigh bells bring joy and cheer wherever they go. Their timeless appeal and enduring quality make them a cherished addition to any holiday decor.' },
  { id: 16, pname: 'Woven Landscape', price: 95.00, category_id: 4, artisan_id: 4, quantity: 10, product_description:'The Woven Landscape are a stunning example of textile artistry, depicting serene landscapes and natural scenes with intricate weaving techniques. Each textile is meticulously crafted from a variety of yarns and fibers, creating a rich tapestry of colors and textures that bring the beauty of the outdoors into your home. Whether hung on a wall or draped over furniture, these woven landscapes add a touch of warmth and beauty to any space.' },
  { id: 17, pname: 'White Paper Flowers', price: 45.00, category_id: 5, artisan_id: 5, quantity: 10, product_description:'The White Paper Flowers are delicate and ethereal, crafted with precision and care from crisp white paper. Each petal is carefully cut and folded to create a lifelike bloom, while the slender stems add a touch of elegance. Whether used as a centerpiece for a special occasion or as a permanent fixture in your home decor, these paper flowers bring a sense of whimsy and beauty to any space.' },
  { id: 18, pname: 'Diamond Dollar', price: 260.00, category_id: 6, artisan_id: 6, quantity: 10, product_description:'The Diamond Dollar pendant is a luxurious and eye-catching accessory that combines the elegance of diamonds with the symbolism of currency. Set in a sleek metal frame, the sparkling diamonds form the shape of a dollar sign, adding a touch of opulence and wealth to any outfit. Whether worn as a statement piece or as a subtle nod to prosperity, this pendant is sure to turn heads and spark conversation wherever you go.' },
  { id: 19, pname: 'Teapot', price: 55.00, category_id: 1, artisan_id: 1, quantity: 10, product_description:'The Pottery Black Teapot is a timeless classic, crafted from durable clay and finished with a glossy black glaze. Its sleek and modern design makes it a stylish addition to any kitchen or dining room, while its sturdy construction ensures years of use. Whether brewing your favorite tea or simply displayed as a decorative accent, this teapot adds a touch of sophistication to any home.' },
  { id: 20, pname: 'Gypsum Antique', price: 350.00, category_id: 2, artisan_id: 2, quantity: 10, product_description:'The sculpture of two figures Gypsum Antique is a captivating work of art that captures the beauty and grace of the human form. Crafted from gypsum and meticulously sculpted by hand, the figures are frozen in a moment of intimacy and connection, their bodies intertwined in a tender embrace. Whether displayed as a standalone piece or as part of a larger collection, this antique sculpture adds a touch of elegance and refinement to any space.' },
  { id: 21, pname: 'Roman Arrows', price: 130.00, category_id: 3, artisan_id: 3, quantity: 10, product_description:'The Roman arrows are a striking example of ancient craftsmanship and military prowess. Skillfully crafted from sturdy metal, each arrow is carefully balanced and sharpened to perfection, ensuring accuracy and effectiveness on the battlefield. The intricate designs etched into the shafts and fletching add a touch of artistry to these deadly weapons, reflecting the rich cultural heritage of the Roman Empire. Whether displayed as a historical artifact or used for target practice, these Roman arrows are a testament to the ingenuity and skill of ancient metallurgists and warriors.' },
  { id: 22, pname: 'Silk Scarf', price: 190.00, category_id: 4, artisan_id: 4, quantity: 10, product_description:'The Blue Silk Scarf is luxurious and versatile accessories that add a touch of elegance to any outfit. Made from soft and lightweight silk, each scarf features a delicate blue hue and intricate patterns inspired by nature and traditional motifs. Whether worn as a statement piece or draped over your shoulders for warmth and comfort, these silk scarves are sure to elevate your look and add a touch of sophistication to any ensemble.' },
  { id: 23, pname: 'Cloud with Raindrops', price: 20.00, category_id: 5, artisan_id: 5, quantity: 10, product_description:'The Cloud with Raindrops paper craft is a whimsical and charming decoration that brings a touch of nature indoors. Crafted from fluffy white cotton balls and delicate paper raindrops, this cloud mobile hangs from the ceiling and gently sways in the breeze, creating a sense of movement and tranquility. Whether hung in a nursery to soothe a baby to sleep or in a living room to add a touch of whimsy, this paper craft adds a playful and imaginative touch to any space.' },
  { id: 24, pname: 'Circular Diamond', price: 860.00, category_id: 6, artisan_id: 6, quantity: 10, product_description:'The Circular Diamond necklace is a dazzling and luxurious accessory that exudes elegance and sophistication. Crafted from polished metal and adorned with sparkling diamonds, the necklace features a circular pendant that catches the light and draws attention to the neckline. Whether worn for a special occasion or as an everyday accessory, this necklace adds a touch of glamour and refinement to any outfit.' },
  { id: 25, pname: 'Vintage Pottery', price: 130.00, category_id: 1, artisan_id: 1, quantity: 10, product_description:'The Brown Vintage Pottery is a charming and nostalgic addition to any home decor. Crafted from durable clay and finished with a rustic brown glaze, each piece boasts a unique texture and color variation that adds warmth and character to any space. Whether used as a functional piece or displayed as decorative art, this vintage pottery evokes a sense of history and tradition, reminding us of simpler times and the beauty of handmade craftsmanship.' },
  { id: 26, pname: 'Wooden Elephant Statue', price: 210.00, category_id: 2, artisan_id: 2, quantity: 10, product_description:'The Wooden Elephant Statue is a majestic and graceful depiction of one of the most beloved creatures. Hand-carved from solid wood, the statue features intricate details and lifelike proportions that capture the essence of the elephant with striking realism. Whether displayed as a standalone piece or as part of a larger collection, this wooden elephant adds a touch of exotic charm and natural beauty to any space.' },
  { id: 27, pname: 'Ninja Star Shuriken', price: 50.00, category_id: 3, artisan_id: 3, quantity: 10, product_description:'The Ninja Star Shuriken is a fearsome weapon that embodies the stealth and precision of the ninja warrior. Crafted from tough metal, each shuriken is expertly forged and sharpened to razor-like perfection. The compact size and aerodynamic design make it ideal for throwing with deadly accuracy, while the intricate patterns etched into the surface enhance its visual appeal. Whether used for self-defense or as a display of martial prowess, the Ninja Star Shuriken commands respect and admiration. Its silent and swift nature makes it a formidable tool in the hands of a skilled ninja, striking fear into the hearts of enemies with its deadly efficiency.' },
  { id: 28, pname: 'Little Owls', price: 64.00, category_id: 4, artisan_id: 4, quantity: 10, product_description:'The two blue and pink Little Owls are adorable and whimsical accents that add a touch of charm to any room. Made from soft and durable fabric, each owl features a vibrant blue or pink hue and intricate embroidery details that bring them to life. Whether placed on a bed, sofa, or shelf, these little owls add a playful and cheerful touch to any space, making them perfect for any room or anyone who loves these wise and enigmatic birds.' },
  { id: 29, pname: 'Wintery Night', price: 42.00, category_id: 5, artisan_id: 5, quantity: 10, product_description:'The blue Wintery Night paper craft is a magical and enchanting scene that captures the beauty of a snowy evening. Crafted from delicate paper and intricate cutouts, the scene depicts a serene winter landscape with snow-covered trees and twinkling stars overhead. Whether displayed as a standalone decoration or incorporated into a larger art project, this paper craft adds a touch of whimsy and wonder to any space, transporting viewers to a snowy wonderland filled with magic and possibility.' },
  { id: 30, pname: 'White Gold', price: 670.00, category_id: 6, artisan_id: 6, quantity: 10, product_description:'The White Gold pendant is a luxurious and elegant accessory that adds a touch of sophistication to any outfit. Crafted from gleaming white gold and adorned with sparkling gemstones, the pendant features a timeless design that never goes out of style. Whether worn for a special occasion or as an everyday accessory, this pendant adds a touch of glamour and refinement to any ensemble, making it the perfect gift for yourself or someone special.' },
  { id: 31, pname: 'Majorcan Ceramic Bowls', price: 110.00, category_id: 1, artisan_id: 1, quantity: 10, product_description:'The colorful Majorcan Ceramic Bowls are vibrant and eye-catching pieces that add a touch of Mediterranean flair to any table setting. Handcrafted from durable ceramic and painted with bold and playful designs, each bowl is a unique work of art that brings joy and personality to mealtime. Whether used for serving salads, soups, or snacks, these colorful bowls are sure to be a conversation starter and a favorite among guests.' },
  { id: 32, pname: 'Statue of Pharaoh', price: 270.00, category_id: 2, artisan_id: 2, quantity: 10, product_description:'The Statue of Pharaoh is a majestic and imposing figure that commands attention with its regal presence. Crafted from durable materials and adorned with intricate details, the statue depicts a pharaoh in all his glory, with elaborate headdress and ceremonial garb. Whether displayed as a standalone piece or as part of a larger collection, this statue adds a touch of ancient Egypt to any space, evoking the grandeur and mystique of this ancient civilization.' },
  { id: 33, pname: 'Fish Figurine', price: 195.00, category_id: 3, artisan_id: 3, quantity: 10, product_description:'The two Fish Figurine metalwork are charming and whimsical sculptures that add a touch of nautical charm to any room. Crafted from durable metal and finished with intricate details, each fish features a lifelike appearance and dynamic pose that captures the beauty and grace of these underwater creatures. Whether displayed on a shelf, mantel, or tabletop, these fish figurines are sure to delight and captivate viewers with their playful and colorful presence.' },
  { id: 34, pname: 'Vintage Fabric', price: 76.00, category_id: 4, artisan_id: 4, quantity: 10, product_description:'The Flowers Vintage Fabric are delicate and nostalgic accents that add a touch of vintage charm to any room. Made from soft and lightweight fabric, each flower features intricate embroidery and embellishments that evoke the romance and elegance of bygone eras. Whether used to adorn curtains, pillows, or clothing, these vintage fabric flowers add a timeless and romantic touch to any space, making them perfect for anyone who loves all things vintage.' },
  { id: 35, pname: 'Bees', price: 28.00, category_id: 5, artisan_id: 5, quantity: 10, product_description:'The Bees with flowers is a whimsical and charming decoration that brings a touch of nature indoors. Crafted from colorful paper and delicate embellishments, this paper craft features a swarm of buzzing bees frolicking among vibrant flowers. Whether hung on a wall or placed on a tabletop, this paper craft adds a playful and cheerful touch to any space, reminding viewers of the beauty and wonder of the natural world.' },
  { id: 36, pname: 'Jewelry Pendant', price: 540.00, category_id: 6, artisan_id: 6, quantity: 10, product_description:'The heart Jewelry Pendant is a romantic and sentimental accessory that celebrates love and affection. Crafted from gleaming metal and adorned with sparkling gemstones, the pendant features a heart-shaped design that symbolizes love and commitment. Whether worn as a symbol of devotion or given as a token of affection, this pendant is sure to capture the heart of its wearer and serve as a cherished reminder of love.' },
  { id: 37, pname: 'Summer Teapot', price: 76.00, category_id: 1, artisan_id: 1, quantity: 10, product_description:'The Summer Teapot is a delightful creation that evokes the warmth and joy of the summer season. Handcrafted from durable clay and painted with vibrant colors, each teapot features whimsical designs inspired by the beauty of nature. Whether used for serving tea or simply displayed as a decorative accent, this teapot adds a touch of cheer to any table setting or kitchen decor.' },
  { id: 38, pname: 'Cyborg Head', price: 89.00, category_id: 2, artisan_id: 2, quantity: 10, product_description:'The Cyborg Head is a futuristic and intriguing work of art that blends elements of human and machine, adorned with intricate details, the sculpture depicts a humanoid head with mechanical features. Whether displayed as a standalone piece or as part of a larger collection, this cyborg head sparks curiosity and imagination, inviting viewers to ponder the possibilities of technology and humanity.' },
  { id: 39, pname: 'Oman Coat of Arms', price: 340.00, category_id: 3, artisan_id: 3, quantity: 10, product_description:'The Oman Coat of Arms is a symbol of national pride and identity, meticulously crafted from durable metal. Featuring intricate designs and fine details, the coat of arms depicts various emblems and symbols that represent the rich history and culture of Oman. Whether displayed in a government building or as a decorative accent in a home, this metalwork serves as a proud reminder of heritage and values.' },
  { id: 40, pname: 'Red Pouch', price: 25.00, category_id: 4, artisan_id: 4, quantity: 10, product_description:'The Red Pouch are stylish and versatile accessories that add a pop of color to any outfit. Made from soft and durable fabric, each pouch features a vibrant red hue and convenient zipper closure. Whether used to carry small essentials or as a statement-making clutch, these red pouches are both fashionable and functional, making them perfect for everyday use or special occasions.' },
  { id: 41, pname: 'Hot Air Balloon', price: 18.00, category_id: 5, artisan_id: 5, quantity: 10, product_description:'The Hot Air Balloon is a whimsical and enchanting decoration that adds a touch of adventure to any space. Crafted from colorful paper and delicate string, the hot air balloon features intricate details and vibrant colors that capture the imagination. Whether hung from the ceiling or placed on a tabletop, this paper craft brings a sense of wonder and excitement to any room, reminding viewers of the beauty and possibility of flight.' },
  { id: 42, pname: 'Ring with Aquamarine Gem', price: 560.00, category_id: 6, artisan_id: 6, quantity: 10, product_description:'The Ring with Aquamarine Gem is a stunning and elegant accessory that exudes sophistication and style. Adorned with a sparkling aquamarine gemstone, the ring features a timeless design that complements any outfit. Whether worn as a statement piece or as a subtle accent, this aquamarine ring adds a touch of glamour and luxury to any ensemble, making it the perfect accessory for any occasion.' },
  { id: 43, pname: 'Black Clay Pottery', price: 130.00, category_id: 1, artisan_id: 1, quantity: 10, product_description:'The Black Clay is a sleek and modern addition to any home decor. Handcrafted from durable clay and finished with a glossy black glaze, each piece boasts a minimalist design that adds a touch of sophistication to any space. Whether used for serving food or as a decorative accent, this black pottery is sure to make a statement and draw admiration from onlookers.' },
  { id: 44, pname: 'Abstract Sculptural Geometric Shapes', price: 220.00, category_id: 2, artisan_id: 2, quantity: 10, product_description:'The Abstract Sculptural Geometric Shapes is a captivating and thought-provoking work of art that explores the intersection of form and space. Crafted from durable materials and featuring bold shapes and angles, the sculpture challenges viewers to rethink their perception of reality and perspective. Whether displayed as a standalone piece or as part of a larger collection, this abstract sculpture sparks curiosity and stimulates the imagination, inviting viewers to ponder the mysteries of the universe.' },
  { id: 45, pname: 'Blacksmith Anvil', price: 113.00, category_id: 3, artisan_id: 3, quantity: 10, product_description:'The Blacksmith Anvil is a symbol of craftsmanship and tradition, meticulously crafted from sturdy metal. Featuring a solid base and smooth surface, the anvil is an essential tool for blacksmiths and metalworkers alike. Whether used for shaping metal or as a decorative accent in a workshop or home, this gray metalwork serves as a proud reminder of the time-honored craft of blacksmithing.' },
  { id: 46, pname: 'Sensory Quite Book', price: 28.00, category_id: 4, artisan_id: 4, quantity: 10, product_description:'The Sensory Quite Book are interactive and educational toys that stimulate the senses and encourage learning through play. Made from soft and durable fabric, each page of the book features different textures, colors, and activities that engage the senses on children and promote cognitive development. Whether used as a quiet activity at home or as a tool for early childhood education, this sensory book provides hours of entertainment and learning for young children.' },
  { id: 47, pname: 'Colorful Paper Windmill', price: 30.00, category_id: 5, artisan_id: 5, quantity: 10, product_description:'The Colorful Paper Windmill is a whimsical and playful decoration that adds a touch of fun to any space. Crafted from colorful paper and delicate string, the windmill features intricate details and vibrant colors that catch the eye and delight the senses. Whether hung from the ceiling or placed on a tabletop, this paper windmill brings a sense of movement and joy to any room, reminding viewers of carefree days spent outdoors.' },
  { id: 48, pname: 'Wedding Ring', price: 560.00, category_id: 6, artisan_id: 6, quantity: 10, product_description:'The Wedding Ring is a symbol of love and commitment, crafted from precious metals and adorned with sparkling gemstones. Whether simple and classic or intricate and ornate, each wedding ring is a unique expression of the bond and promises made to each other. Whether exchanged during a ceremony or worn as a daily reminder of love, the wedding ring holds deep sentimental value and significance.' },
  { id: 49, pname: 'Yellow Dented Cup', price: 30.00, category_id: 1, artisan_id: 1, quantity: 10, product_description:'The Yellow Dented Cup is a charming and whimsical addition to any table setting. Handcrafted from durable clay and finished with a cheerful yellow glaze, each cup features a distinctive dented design that adds character and charm. Whether used for serving beverages or as a decorative accent, this yellow cup brings a touch of sunshine and happiness to any occasion.' },
  { id: 50, pname: 'Black and White Cube Mockup', price: 178.00, category_id: 2, artisan_id: 2, quantity: 10, product_description:'The Black and White Cube Mockup is a modern and minimalist work of art that plays with light and shadow. Crafted from sturdy materials and featuring clean lines and sharp angles, the sculpture creates intriguing visual effects as it interacts with its surroundings. Whether displayed as a standalone piece or as part of a larger collection, this black and white cube mockup adds a touch of contemporary elegance to any space.' },
  { id: 51, pname: 'Claw Clips', price: 29.00, category_id: 3, artisan_id: 3, quantity: 10, product_description:'The Claw Clips are stylish and functional accessories that add a touch of edgy flair to any hairstyle. Made from durable metal and featuring sharp teeth for a secure grip, these claw clips hold hair in place with ease and style. Whether used to create a sleek updo or to add texture and volume to loose locks, these metal claw clips are a must-have accessory for anyone looking to elevate their hair game.' },
  { id: 52, pname: 'Knitting Gifts', price: 80.00, category_id: 4, artisan_id: 4, quantity: 10, product_description:'The Knitting Gifts are thoughtful and heartfelt presents that celebrate the art of knitting and crochet. Whether a beginner or an experienced crafter, these gifts are sure to inspire creativity and bring joy to knitters of all skill levels. From knitting kits and patterns to yarns and accessories, there is something for everyone to enjoy and explore in the world of knitting.' },
  { id: 53, pname: 'Chinese New Year Dragon', price: 46.00, category_id: 5, artisan_id: 5, quantity: 10, product_description:'The Chinese New Year Dragon is a festive and colorful decoration that celebrates the Lunar New Year in style. Crafted from vibrant paper and delicate string, the dragon features intricate details and bold colors that capture the spirit of the holiday. Whether hung from the ceiling or displayed on a tabletop, this paper dragon brings good luck and prosperity to any space, ushering in the new year with joy and excitement.' },
  { id: 54, pname: 'Circular Pendant', price: 630.00, category_id: 6, artisan_id: 6, quantity: 10, product_description:'The Circular Pendant is a timeless and versatile accessory that adds a touch of elegance to any outfit. Crafted from gleaming metal and featuring a simple yet sophisticated design, the pendant is perfect for everyday wear or special occasions. Whether worn alone as a statement piece or layered with other necklaces for a more dramatic look, this circular pendant complements any style and adds a touch of understated glamour to any ensemble.' },
  { id: 55, pname: 'Green Ceramic Vase', price: 140.00, category_id: 1, artisan_id: 1, quantity: 10, product_description:'The Green Ceramic Vase is a stylish and versatile accessory that adds a pop of color to any room. Crafted from durable ceramic and finished with a glossy green glaze, the vase features a sleek and modern design that complements any decor. Whether used to display flowers or as a standalone piece of art, this green vase adds a touch of freshness and vitality to any space.' },
  { id: 56, pname: 'Red Statue of Budha', price: 229.00, category_id: 2, artisan_id: 2, quantity: 10, product_description:'The Red Statue of Buddha is a striking and serene depiction of the revered spiritual leader. Crafted from durable materials and finished with a bold red hue, the statue captures the Buddha in a moment of meditation and enlightenment. Whether displayed as a focal point in a meditation room or as a decorative accent in a living room, this red statue brings a sense of peace and tranquility to any space, inspiring viewers to find inner calm and mindfulness.' },
  { id: 57, pname: 'Old Turquoise Metal Door', price: 250.00, category_id: 3, artisan_id: 3, quantity: 10, product_description:'The Old Turquoise Metal Door is a charming and rustic addition to any home decor. Crafted from sturdy metal and finished with a weathered turquoise patina, the door features intricate scrollwork and decorative accents that add character and charm. Whether used as a decorative accent or as a functional piece of art, this metal door adds a touch of vintage elegance to any space, transporting viewers to a bygone era of craftsmanship and tradition.' },
  { id: 58, pname: 'Homemade Sewn Hearts', price: 56.00, category_id: 4, artisan_id: 4, quantity: 10, product_description:'The Homemade Sewn Hearts are charming and heartfelt creations that add a touch of love and warmth to any room. Made from soft and durable fabric, each heart is lovingly sewn by hand and filled with fluffy stuffing. Whether displayed on a bed, sofa, or shelf, these homemade hearts bring a sense of comfort and joy to any space, making them perfect for anyone who appreciates the beauty of handmade craftsmanship.' },
  { id: 59, pname: 'Tropical Paper Palm', price: 28.00, category_id: 5, artisan_id: 5, quantity: 10, product_description:'The Tropical Paper Palm is a whimsical and vibrant decoration that brings a touch of paradise to any space. Crafted from colorful paper and delicate string, the palm tree features intricate details and bold colors that capture the beauty and lushness of the tropics. Whether hung from the ceiling or placed on a tabletop, this paper palm adds a playful and exotic touch to any room, transporting viewers to a sun-drenched beach paradise.' },
  { id: 60, pname: 'Vintage Brooch', price: 570.00, category_id: 6, artisan_id: 6, quantity: 10, product_description:'The Vintage Brooch is a timeless and elegant accessory that adds a touch of vintage glamour to any outfit. Crafted from gleaming metal and adorned with sparkling gemstones, each brooch features a classic design that never goes out of style. Whether worn as a statement piece or as a subtle accent, this vintage brooch adds a touch of old-world charm and sophistication to any ensemble, making it the perfect accessory for any occasion.' }
];


const categories = [
  { id: 1, categoryname: 'Pottery' },
  { id: 2, categoryname: 'Sculpture' },
  { id: 3, categoryname: 'Metalwork' },
  { id: 4, categoryname: 'Textiles' },
  { id: 5, categoryname: 'Paper' },
  { id: 6, categoryname: 'Jewelry' }
];

