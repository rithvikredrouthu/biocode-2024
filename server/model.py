import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

file_path = r'osteoporosis.csv'
data = pd.read_csv(file_path)

columns_to_drop = ['Alcohol Consumption', 'Hormonal Changes', 'Medications', 'Medical Conditions', 'Id']
data = data.drop(columns=columns_to_drop)

X = data.drop(columns=['Osteoporosis'])
y = data['Osteoporosis']

numeric_features = X.select_dtypes(include=['int64', 'float64']).columns
categorical_features = X.select_dtypes(include=['object']).columns

numeric_transformer = StandardScaler()
categorical_transformer = OneHotEncoder(handle_unknown='ignore')

preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ])

svm_model = Pipeline(steps=[('preprocessor', preprocessor),
                             ('classifier', SVC(kernel='linear'))])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

svm_model.fit(X_train, y_train)

def predict_osteoporosis_risk(new_data):
    prediction = svm_model.predict(new_data)
    if 0 == prediction:
        return("You have a low chance of osteoporosis")
    else:
        return("You have a high chance of osteoporosis")

def converter(a, g, f, r, bw, c, v, ph, s, p):
     
    new_data_point = pd.DataFrame(data={'Age': [a],
                                    'Gender': [g],
                                    'Family History': [f],
                                    'Race/Ethnicity': [r],
                                    'Body Weight': [bw],
                                    'Calcium Intake': [c],
                                    'Vitamin D Intake': [v],
                                    'Physical Activity': [ph],
                                    'Smoking': [s],
                                    'Prior Fractures': [p]})
    prediction = predict_osteoporosis_risk(new_data_point)
    return prediction