-- Database setup for Cozy House pet adoption website

-- Create pets table
CREATE TABLE IF NOT EXISTS pets (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image TEXT,
    breed VARCHAR(255),
    age VARCHAR(255),
    description TEXT,
    inoculations TEXT[],
    diseases TEXT[],
    parasites TEXT[]
);

-- Insert sample data
INSERT INTO pets (id, name, image, breed, age, description, inoculations, diseases, parasites)
VALUES 
('1', 'Katrine', 'pet-katrine.png', 'British Shorthair', '6 months', 'Katrine is a gentle and affectionate cat who loves to curl up in sunny spots. She gets along well with other pets and children.', ARRAY['panleukopenia', 'rhinotracheitis', 'calicivirus'], ARRAY['none'], ARRAY['none']),
('2', 'Jennifer', 'pet-jennifer.png', 'Labrador', '2 years', 'Jennifer is an energetic and friendly Labrador who loves to play fetch and go for long walks. She is well-trained and great with families.', ARRAY['rabies', 'distemper', 'parvovirus'], ARRAY['none'], ARRAY['none']),
('3', 'Woody', 'pet-woody.png', 'Golden Retriever', '3 years', 'Woody is a loyal and loving Golden Retriever with a calm temperament. He enjoys swimming and being around people.', ARRAY['rabies', 'distemper', 'hepatitis'], ARRAY['none'], ARRAY['none']),
('4', 'Scarlet', 'pet-scarlet.png', 'Jack Russell Terrier', '3 months', 'Scarlet is a playful and spirited puppy with boundless energy. She loves toys and is very curious about everything around her.', ARRAY['parvovirus', 'distemper'], ARRAY['none'], ARRAY['none']),
('5', 'Charly', 'pet-charly.png', 'British Shorthair', '9 months', 'Charly is an independent yet affectionate cat who enjoys quiet time and gentle petting. Perfect for a calm household.', ARRAY['panleukopenia', 'rhinotracheitis'], ARRAY['none'], ARRAY['none']),
('6', 'Timmy', 'pet-timmy.png', 'British Shorthair', '2 years', 'Timmy is a laid-back and easygoing cat who loves to relax and watch the world go by from his favorite perch.', ARRAY['panleukopenia', 'calicivirus', 'rabies'], ARRAY['none'], ARRAY['none']),
('7', 'Sophia', 'pet-sophia.png', 'British Shorthair', '1 year', 'Sophia is a sweet and gentle cat with beautiful markings. She loves being brushed and will purr contentedly for hours.', ARRAY['rhinotracheitis', 'calicivirus'], ARRAY['none'], ARRAY['none']),
('8', 'Luna', 'pet-freddie.png', 'British Shorthair', '8 months', 'Luna is a playful kitten who loves interactive toys and chasing laser pointers. She is very social and loves attention.', ARRAY['panleukopenia', 'rhinotracheitis', 'calicivirus'], ARRAY['none'], ARRAY['none']),
('9', 'Bella', 'pet-scarlet.png', 'Persian', '1 year', 'Bella is a calm and loving Persian cat who enjoys lounging in quiet corners and receiving gentle strokes.', ARRAY['rhinotracheitis', 'calicivirus', 'rabies'], ARRAY['none'], ARRAY['none']),
('10', 'Max', 'pet-charly.png', 'German Shepherd', '4 years', 'Max is a loyal and intelligent German Shepherd who loves protecting his family and playing fetch in the yard.', ARRAY['rabies', 'distemper', 'parvovirus'], ARRAY['none'], ARRAY['none']),
('11', 'Molly', 'pet-timmy.png', 'Ragdoll', '18 months', 'Molly is a docile and placid Ragdoll cat who enjoys being carried and cuddled like a rag doll.', ARRAY['panleukopenia', 'rhinotracheitis'], ARRAY['none'], ARRAY['none']),
('12', 'Toby', 'pet-sophia.png', 'Beagle', '3 years', 'Toby is a friendly and curious Beagle with an excellent sense of smell who loves outdoor adventures.', ARRAY['rabies', 'distemper', 'hepatitis'], ARRAY['none'], ARRAY['none']),
('13', 'Zoe', 'pet-freddie.png', 'Maine Coon', '2 years', 'Zoe is a friendly and playful Maine Coon with impressive size and personality.', ARRAY['panleukopenia', 'calicivirus', 'rhinotracheitis'], ARRAY['none'], ARRAY['none']),
('14', 'Rocky', 'pet-woody.png', 'Boxer', '5 years', 'Rocky is an energetic and playful Boxer who loves physical activities and games.', ARRAY['rabies', 'distemper', 'parvovirus'], ARRAY['none'], ARRAY['none']),
('15', 'Lily', 'pet-jennifer.png', 'Siamese', '1.5 years', 'Lily is a vocal and social Siamese cat who loves attention and communicating with her humans.', ARRAY['rhinotracheitis', 'calicivirus'], ARRAY['none'], ARRAY['none']),
('16', 'Bailey', 'pet-katrine.png', 'Poodle', '2.5 years', 'Bailey is an intelligent and active Poodle who excels in training and loves water.', ARRAY['rabies', 'distemper', 'hepatitis'], ARRAY['none'], ARRAY['none'])
ON CONFLICT (id) DO NOTHING;