// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Icon name="menu" size={24} color="#6BB6FF" />
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Icon name="person" size={30} color="#6BB6FF" />
          </View>
        </View>

        <View style={styles.waveContainer}>
          <View style={styles.wave1} />
          <View style={styles.wave2} />
          <View style={styles.wave3} />
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.mainTitle}>
            Your <Text style={styles.highlightText}>Personal</Text>
          </Text>
          <Text style={styles.mainTitle}>AI Therapist</Text>

          <Text style={styles.subtitle}>
            Redefining Therapy for the Digital Age
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>Text Chat</Text>
              <Icon
                name="arrow-forward"
                size={20}
                color="white"
                style={styles.buttonIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>Voice Chat</Text>
              <Icon
                name="arrow-forward"
                size={20}
                color="white"
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const FeaturesScreen = () => {
  const features = [
    {
      icon: 'chatbubbles',
      title: 'Extremely Affordable',
      subtitle:
        'Low cost therapy, small fraction of the cost of traditional therapy',
    },
    {
      icon: 'time',
      title: 'Always Available',
      subtitle: 'Access therapy 24/7 whenever and wherever you need',
    },
    {
      icon: 'person-circle',
      title: 'Personalized Therapist',
      subtitle: 'Therapist learns more about you with every conversation',
    },
    {
      icon: 'people',
      title: 'Multiple Conversations',
      subtitle:
        'Manage different conversations for different aspects of your life',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Features</Text>

        <View style={styles.heroImageContainer}>
          <View style={styles.meditationImage}>
            <Icon name="leaf" size={60} color="#6BB6FF" />
            <Text style={styles.imageText}>Meditation & Mindfulness</Text>
          </View>
        </View>

        <View style={styles.featuresList}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <Icon name={feature.icon} size={24} color="#6BB6FF" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureSubtitle}>{feature.subtitle}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Testimonials Screen Component
const TestimonialsScreen = () => {
  const testimonials = [
    {
      name: 'Miles Harper',
      text: 'If only I had discovered this before dumping 10K on in-person therapy! What a life-saver!',
      avatar: 'person-circle',
    },
    {
      name: 'Sarah Johnson',
      text: 'The AI therapist is so understanding and available whenever I need support. Truly amazing!',
      avatar: 'person-circle',
    },
    {
      name: 'David Chen',
      text: 'Best investment in my mental health. The personalized responses get better with each session.',
      avatar: 'person-circle',
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <Text style={styles.sectionTitle}>What People</Text>
        <Text style={[styles.sectionTitle, {marginTop: 0, color: '#6BB6FF'}]}>
          Say
        </Text>

        <Text style={styles.testimonialSubtitle}>
          Read real reviews of people who tested our AI Therapist for
          themselves!
        </Text>

        {/* Testimonial Card */}
        <View style={styles.testimonialContainer}>
          <View style={styles.testimonialCard}>
            <Icon
              name="leaf"
              size={30}
              color="#6BB6FF"
              style={styles.quoteIcon}
            />

            <Text style={styles.testimonialText}>
              {testimonials[currentIndex].text}
            </Text>

            <View style={styles.testimonialAuthor}>
              <Icon
                name={testimonials[currentIndex].avatar}
                size={40}
                color="#6BB6FF"
              />
              <Text style={styles.authorName}>
                {testimonials[currentIndex].name}
              </Text>
            </View>
          </View>

          {/* Navigation */}
          <View style={styles.testimonialNav}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={prevTestimonial}>
              <Icon name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={nextTestimonial}>
              <Icon name="chevron-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Features') {
              iconName = focused ? 'star' : 'star-outline';
            } else if (route.name === 'Reviews') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6BB6FF',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: {
            backgroundColor: '#1A1A2E',
            borderTopColor: '#2A2A3E',
            borderTopWidth: 1,
            paddingBottom: 5,
            height: 60,
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Features" component={FeaturesScreen} />
        <Tab.Screen name="Reviews" component={TestimonialsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16213E',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderColor: '#6BB6FF',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  signUpText: {
    color: '#6BB6FF',
    fontSize: 16,
    fontWeight: '600',
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#2A2A3E',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveContainer: {
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    height: 300,
    overflow: 'hidden',
  },
  wave1: {
    position: 'absolute',
    top: 50,
    left: -50,
    width: width + 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 50,
    transform: [{rotate: '-10deg'}],
  },
  wave2: {
    position: 'absolute',
    top: 120,
    left: -30,
    width: width + 60,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 40,
    transform: [{rotate: '5deg'}],
  },
  wave3: {
    position: 'absolute',
    top: 180,
    left: -70,
    width: width + 140,
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 60,
    transform: [{rotate: '-15deg'}],
  },
  mainContent: {
    marginTop: 180,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 55,
  },
  highlightText: {
    color: '#6BB6FF',
  },
  subtitle: {
    fontSize: 18,
    color: '#B0B0B0',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
    lineHeight: 25,
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  actionButton: {
    backgroundColor: '#6BB6FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 8,
  },
  sectionTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  heroImageContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  meditationImage: {
    width: width - 80,
    height: 200,
    backgroundColor: '#2A2A3E',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: '#6BB6FF',
    fontSize: 16,
    marginTop: 10,
    fontWeight: '600',
  },
  featuresList: {
    marginTop: 20,
    paddingBottom: 30,
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#2A2A3E',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  featureIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#16213E',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featureSubtitle: {
    color: '#B0B0B0',
    fontSize: 14,
    lineHeight: 20,
  },
  testimonialSubtitle: {
    color: '#B0B0B0',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  testimonialContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testimonialCard: {
    backgroundColor: '#2A2A3E',
    padding: 30,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  quoteIcon: {
    marginBottom: 20,
  },
  testimonialText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 25,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  testimonialNav: {
    flexDirection: 'row',
    gap: 20,
  },
  navButton: {
    backgroundColor: '#6BB6FF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
